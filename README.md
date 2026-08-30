# New Age Curriculum LLC Website

This is a static presentation website for New Age Curriculum LLC, the creator of PEPackets.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Check TypeScript
npm run check

# Build for production
npm run build
```

## Deployment

This static website is ready to be hosted on any static hosting provider. The recommended setup is a dedicated GitHub repository named `new-age-curriculum`, with the contents of this folder placed at the repository root.

The Cloudflare Pages settings are:

- Build command: `npm run build`
- Build output directory: `dist/public`
- Environment variables: none required

`PORT` and `BASE_PATH` are optional local development settings. The production build defaults to a standard root URL without them.

### Deploying to Cloudflare Pages from GitHub
1. Create a GitHub repository named `new-age-curriculum`.
2. Copy the contents of `artifacts/new-age-curriculum` into the root of that repository.
3. Do not commit `node_modules`, `dist`, `.env` files, or `.replit-artifact`.
4. In Cloudflare, open **Workers & Pages** and choose **Create application → Pages → Connect to Git**.
5. Select the `new-age-curriculum` repository and its production branch.
6. Use the framework preset **Vite** if offered.
7. Set the build command to `npm run build`.
8. Set the build output directory to `dist/public`.
9. Leave environment variables empty and click **Save and Deploy**.

### Connecting `newagecurriculum.com`
Once the first Cloudflare Pages deployment succeeds:
1. Open the Pages project and select **Custom domains → Set up a custom domain**.
2. Enter `newagecurriculum.com`.
3. Add `www.newagecurriculum.com` as an additional domain if you want both versions to work.
4. If the domain is already managed in the same Cloudflare account, Cloudflare can add the DNS records automatically.
5. Otherwise, add the DNS records Cloudflare provides at your domain registrar or DNS provider.
6. Set the preferred hostname and redirect the other hostname to it if desired. Cloudflare will provision HTTPS.
