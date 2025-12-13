# School of Conscious Communication

This repository contains the website for the School of Conscious Communication. It hosts the site's code, components, and static assets used to present projects, resources, and community information.

Origin: This project was initially scaffolded using lovable.dev. The site and repository have been adapted and are maintained locally from this codebase.

## Local development

To run and edit this project locally, follow these steps. This guide assumes you have Git installed and are comfortable using a terminal.

1. Clone the repository using your Git URL:

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies. This project was created with Bun; if you have Bun installed, run:

```sh
bun install
```

If you do not use Bun, you can generally use a compatible Node.js setup and run `npm install` or `pnpm install` instead (adjust commands as needed).

3. Start the development server with hot-reloading:

```sh
bun run dev
```

The dev server command runs the Vite development server. Open the address printed in the terminal (usually `http://localhost:8080`) to view the site.

## Editing the code

- Use your preferred IDE (for example, `Visual Studio Code`).
- The app source is in `app/` and component files are under `app/src/components/`.
- Make changes, test locally, then commit and push to your Git remote.

## What this project is about

This site presents the School of Conscious Communication's projects, resources, and founder information. It is structured as a modern React + Vite app with reusable UI components and sections for projects, resources, and subscription/contact functionality.

## Technologies

- Bun
- Vite
- TypeScript
- React
- Tailwind CSS
- shadcn-ui components

## Notes

## License

This project is licensed under the MIT License.

Copyright (c) 2025 Elijah Ignatieff

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.