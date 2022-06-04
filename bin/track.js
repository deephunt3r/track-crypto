#!/usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')

program
    .version(pkg.version)
    .command('key','Manage API Key from https://nomics.com/')
    .command('check','check priced info')
    .parse(process.argv)

