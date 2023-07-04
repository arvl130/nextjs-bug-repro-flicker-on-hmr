import fs from "fs/promises"
import crypto from "crypto"

async function main() {
  const content = `
export default function Home() {
  return (
    <main>${crypto.randomBytes(20).toString("hex")}</main>
  )
}      
`
  await fs.writeFile("app/page.tsx", content)
}

setInterval(main, 1000)
