import { lookup } from 'node:dns/promises'

const DEV_HOST = 'localhost.vinaykumar-portfolio.com'
const DEV_URL = `http://${DEV_HOST}:5173/`

async function main() {
  try {
    const { address } = await lookup(DEV_HOST)
    if (address === '127.0.0.1' || address === '::1') {
      console.log(`Dev host OK: ${DEV_URL}`)
      return
    }
    console.warn(`Warning: ${DEV_HOST} resolves to ${address}, expected 127.0.0.1`)
  } catch {
    console.error(`
Cannot resolve "${DEV_HOST}".

Run this once from the frontend folder:

  npm run setup:host

Or add this line to /etc/hosts manually:

  127.0.0.1 ${DEV_HOST}

Then open: ${DEV_URL}
`)
    process.exit(1)
  }
}

main()
