# AI Prompts and Documentation Steps

This file contains the prompts used in the AI-assisted setup of this monorepo, along with links to the corresponding documentation steps.

---

## Step 1
**Prompt:**
> I am starting with a bare-bones repo folder here.
>
> I want you to do the following:
>
> - Set it up as a git repository with an empty commit - `--allow-empty`
> - Add in a `.gitignore` for node-based projects and also ignore folders with the pattern `[Nn]o[Tt]rack` and `[Rr]n[Dd]`
> - Make it a pnpm mono-repo with the standard `apps` and `packages` folders for project. But also add in something that prevents any packages from all subfolders of `[Nn]o[Tt]rack` and `[Rr]n[Dd]` from being involved in the shared `node_modules` of the mono-repo

See: [ai-step-1.md](./ai-step-1.md)

---

## Step 2
**Prompt:**
> Add a minimal Node project under `packages` called `count-up`. It should be a bare-minimum library project using TypeScript and tsup for dev-dependencies and the `to-words` package for a dependency. Put an empty `src/index.ts` file in that project. I will manually enter the code for that file. Also add a minimal "ReadMe.md" document for the project. When you are done, document your work in the `docs/ai-step-2.md` file.

See: [ai-step-2.md](./ai-step-2.md)

---

## Step 3
**Prompt:**
> Now create a TypeScript package for the `apps` folder. It is to be a CLI named `cli-count-up` that uses CommanderJS and Inquirer to help with the standard arg parsing and terminal UI requirements. It will have a dependency on the `count-up` package in this mono-repo.
>
> This CLI will not be published on NPM. Rather, I want to release this as tarballs for people to install/use on their systems. I know this has an implication in terms of the mono-repo dependency for `count-up`, so take that into account as well.
>
> For the CLI itself, the app should ask for a positive number up to 100 and then ask if they want those numbers displayed on one line or on separate lines. The actual numbers should be displayed as words.
>
> When you are done, document your work in `docs/ai-step-3.md`.

See: [ai-step-3.md](./ai-step-3.md)

---

## Step 4
**Prompt:**
> Create a ReadMe for the mono-repo as well as separate ReadMe files for the `apps` and `packages` folders. Document your work in `docs/ai-step-4.md`. For by-line credits in this step, include my name - "Dan Gilleland" - as well as which AI agends were used for this project.

See: [ai-step-4.md](./ai-step-4.md)

---

## Step 5
**Prompt:**
> I want an MIT license for everything in this mono-repo. Make the appropriate changes and document your work in `docs/ai-step-5.md`.

See: [ai-step-5.md](./ai-step-5.md)

---

## Step 6
**Prompt:**
> Create a `docs/ai-prompts.md` that contains the prompts I have used in our discussions, along with links to the appropriate AI Step markdown files.
>
> Include this prompt as a new step in the documentation process.

See: [ai-prompts.md](./ai-prompts.md)
