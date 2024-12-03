Write-Host "Diff CDK stack"
# Check if the $env:stack variable is set
# Get the stack name from the environment variable. If not set, use the default stack name
$app = "infra-cdk"
if(Test-Path env:appscript) {$app = $env:appscript }
Write-Host "App: $app"

$stack
if(Test-Path env:stack) {$stack = $env:stack }
Write-Host "Stack: $stack"

$script = 'cdk diff $stack --app "npx ts-node --prefer-ts-exts bin/' + $app + '.ts"'
Write-Host "Running: $script"

Invoke-Expression $script