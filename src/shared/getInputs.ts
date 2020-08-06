import { context } from '@actions/github'
import * as core from '@actions/core'


export const getRemoteRepoName = (): string => { return core.getInput('remote-repository-name', { required: false }) || context.repo.repo }

export const getRemoteOrgName = (): string => { return core.getInput('remote-organization-name', { required: false }) || context.repo.owner }

export const getPathToSignatures = (): string => core.getInput('path-to-signatures', { required: false })

export const getPathToCLADocument = (): string => core.getInput('path-to-cla-document', { required: false })

export const getBranch = (): string => core.getInput('branch', { required: false })

export const getAllowList = (): string => core.getInput('allowlist', { required: false })

export const getEmptyCommitFlag = (): string => core.getInput('empty-commit-flag', { required: false })

export const getSignedCommitMessage = (): string => core.getInput('signed-commit-message', { required: false })

export const getEmptySignedCommitMessage = (): string => core.getInput('signed-empty-commit-message', { required: false })

export const getCreateFileCommitMessage = (): string => core.getInput('create-file-commit-message', { required: false })


// TODO: optimise below  input name
export const getRequestCommentMessage = (): string => core.getInput('request-comment-message', { required: false })

export const getAllSigned = (): string => core.getInput('all-signed-comment-message', { required: false })


