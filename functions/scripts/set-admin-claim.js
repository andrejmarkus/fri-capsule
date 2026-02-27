#!/usr/bin/env node

const path = require("node:path");
require("dotenv").config({path: path.resolve(__dirname, "..", ".env")});
const admin = require("firebase-admin");

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error(
      "Usage: node scripts/set-admin-claim.js <email-or-uid> [--uid] [--remove]"
    );
    process.exit(1);
  }

  const identifier = args[0];
  const byUid = args.includes("--uid");
  const remove = args.includes("--remove");

  const rawServiceAccount = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!rawServiceAccount) {
    throw new Error(
      "GOOGLE_SERVICE_ACCOUNT_JSON is missing. Make sure functions/.env is present."
    );
  }

  const serviceAccount = JSON.parse(rawServiceAccount);
  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fricapsule-default-rtdb.europe-west1.firebasedatabase.app"
  });

  const auth = admin.auth();
  const user = byUid
    ? await auth.getUser(identifier)
    : await auth.getUserByEmail(identifier);

  const currentClaims = user.customClaims || {};
  const nextClaims = { ...currentClaims };

  if (remove) {
    delete nextClaims.admin;
  } else {
    nextClaims.admin = true;
  }

  await auth.setCustomUserClaims(user.uid, nextClaims);

  console.log(
    JSON.stringify(
      {
        ok: true,
        uid: user.uid,
        email: user.email,
        admin: !!nextClaims.admin,
        claims: nextClaims,
      },
      null,
      2
    )
  );
}

main().catch((error) => {
  console.error("Failed to update custom claims:", error.message);
  process.exit(1);
});
