# CLI Count Up

A command-line tool to display numbers as words.

## Usage

After building, run:

```
cli-count-up
```

## Development

- Build: `pnpm build`
- Watch: `pnpm dev`

## Release

This CLI is not published to npm. To distribute, build and pack as a tarball:

```
pnpm pack
```

Users can install the tarball globally:

```
pnpm add -g ./cli-count-up-<version>.tgz
```
