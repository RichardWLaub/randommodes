output "cloudfront_url" {
  value       = aws_cloudfront_distribution.react_app_distribution.domain_name
  description = "The URL of the CloudFront distribution"
}
