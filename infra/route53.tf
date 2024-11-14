# Reference to your existing hosted zone
data "aws_route53_zone" "randommode_click" {
  name         = "randommode.click."
  private_zone = false
}

# Create an alias record that points to the CloudFront distribution
resource "aws_route53_record" "www" {
  zone_id = data.aws_route53_zone.randommode_click.zone_id
  name    = "randommode.click"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.react_app_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.react_app_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}
