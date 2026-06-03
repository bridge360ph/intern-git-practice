# 🧑‍💻 Intern Git Practice — Team Directory

This repository is part of your onboarding Git exercise.
Your task is to add your entry to `team.md` using proper Git workflow.

---

## 📋 Your Task

Follow these steps **in order**. Do not skip any step.

### Step 1 — Clone the repo
```bash
git clone https://github.com/<org>/<repo-name>.git
cd <repo-name>
```

### Step 2 — Create your branch
Branch name format: `feat/add-[your-firstname]-entry`
```bash
git checkout -b feat/add-jane-entry
```

### Step 3 — Add your entry to `team.md`
Open `team.md` and add your entry at the bottom of the list using this exact format:

```markdown
## Your Full Name
**Role:** Intern — [Frontend / Backend / Design]
**Fun fact:** [One sentence about yourself]
```

### Step 4 — Commit your changes
Use a conventional commit message:
```bash
git add .
git commit -m "feat: add [your-firstname] to team directory"
```

### Step 5 — Push your branch
```bash
git push origin feat/add-jane-entry
```

### Step 6 — Open a Pull Request
- Go to the repository on GitHub
- Open a PR from your branch targeting `main`
- PR title must match your commit message: `feat: add [firstname] to team directory`
- In the PR description, briefly explain what you changed and why

### Step 7 — Review a teammate's PR
Before your PR can be merged, you must leave **at least one review comment** on a teammate's open PR.

Check for:
- Correct branch naming (`feat/add-[name]-entry`)
- Correct commit message format
- Correct entry format in `team.md`

### Step 8 — Resolve merge conflicts (if any)
Because multiple people are editing the same file, you may hit a conflict. Here's how to resolve it:

```bash
git pull origin main
# Open team.md and fix the conflict markers manually
git add .
git commit -m "fix: resolve merge conflict in team directory"
git push origin feat/add-jane-entry
```

---

## ✅ Checklist (self-review before requesting a merge)

- [ ] My branch is named `feat/add-[firstname]-entry`
- [ ] My commit message follows the conventional format
- [ ] My entry in `team.md` follows the exact format
- [ ] My PR targets `main` and has a clear description
- [ ] I have reviewed at least one teammate's PR
- [ ] I resolved any merge conflicts before pushing

---

## 🚦 What we're looking for

> This exercise is not graded on difficulty — it's graded on **process**.  
> A clean, well-structured submission beats a flashy one done sloppily.  
> The workflow matters more than the content.

| What | Why it matters |
|---|---|
| Branch naming | Teams use conventions so branches are scannable |
| Commit messages | Conventional commits make history readable and automatable |
| PR quality | PRs are how real teams communicate changes |
| Peer review | Code review is a core engineering skill, not optional |
| Conflict resolution | Every real project has merge conflicts — knowing how to fix them is essential |

---

## ❓ Stuck?

Post in **#\<team\>-code-concerns** using the blocker format pinned in that channel.
