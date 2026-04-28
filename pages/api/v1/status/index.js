import database from "infra/database.js";
import { version } from "react";

// Retornar data de agora no 'body' do json da url http://localhost:3000/api/v1/status
async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
      },
    },
  });
}

export default status;
