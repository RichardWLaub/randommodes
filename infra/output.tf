output "s3_bucket_name" {
  description = "The name of the S3 bucket used for the app"
  value       = module.app_infra.s3_bucket_name
}

output "distribution_id" {
  description = "The CloudFront distribution ID"
  value       = module.app_infra.distribution_id
}

output "a_record" {
  description = "The Route 53 A record for the app"
  value       = module.app_infra.a_record
}

output "distribution_url" {
  description = "The CloudFront distribution domain name (URL)"
  value       = module.app_infra.distribution_url
}
