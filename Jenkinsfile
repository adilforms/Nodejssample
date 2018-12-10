def env = bulid.getEnvironment()
def gitcommit =env['GIT_COMMIT']
def ShortGit = gitcommit[0..6]

def pa = new ParamertesAction([
  new StringParametervalue("GitCommit id", shortGitCommit)
  ])

build.addAction(pa)
