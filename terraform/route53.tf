resource "aws_route53_zone" "primary" {
    name = "bigbuddyinabox.com" 
}

resource "aws_route53_record" "A" {
    zone_id = aws_route53_zone.primary.zone_id
    name    = "bigbuddyinabox.com"
    type    = "A"

    alias {
        evaluate_target_health = true
        name                   = aws_cloudfront_distribution.cf_distribution.domain_name
        zone_id                = aws_cloudfront_distribution.cf_distribution.hosted_zone_id
    }
}