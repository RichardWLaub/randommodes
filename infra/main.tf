module "app_infra" {
  source = "github.com/RichardWLaub/tf-modules//s3-cf-r53?ref=main"

  bucket_name    = "random-mode-app-bucket-rl"
  certificate_id = "727ed494-2c91-4c0f-8890-180b909a6b0b"
  domain_name    = "randommode.click"
  subdomain      = ""
}
