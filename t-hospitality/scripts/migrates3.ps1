$SCRIPT_DIR = Split-Path -Parent $MyInvocation.MyCommand.Definition
$ROOT_DIR = Split-Path -Parent $SCRIPT_DIR
$TMP_DIR = "$ROOT_DIR/tmp"
$dirs = Get-ChildItem -Directory -Path $TMP_DIR
foreach ($dir in $dirs) {
    Write-Host "Syncing $TMP_DIR/$dir from s3://$dir"
    aws s3 sync s3://$dir $TMP_DIR/$dir --delete --profile dc29
    Write-Host "Syncing $TMP_DIR/$dir to s3://dev-$dir"
    aws s3 sync $TMP_DIR/$dir s3://dev-$dir --delete 
    Write-Host "Done $TMP_DIR/$dir"
}