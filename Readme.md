export AWS_ACCESS_KEY_ID="ASIARTVQRHNSPEF5CHQF"
export AWS_SECRET_ACCESS_KEY="6Lne1fSPJWnbJCvLUGGK0yOtqpRXjBx5L+efEbSI"
export AWS_SESSION_TOKEN="IQoJb3JpZ2luZ2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDkEtXxluI8gWH+8OrptCeiAdTmnRrt8zpFOF2qnHiUawIgDPn+t/cDV09PnfkzhUaRHeWWAFOSjQaDcr1eX8T/ql4qtAII0f//////////ARAAGgwxMTA5NjU2MzU5NDAiDNYj6lXu25Bgg6CEASqIAqA7naWoC3k6nSUGeIOkAe0/Rokq/1AYBKVWLxyVuG42gmaSVqYuwTM6AaOh5oAgrIe2SQL0zyY1llhhQgw/Kx9JQvMag67IV7UEgVvIqXcX8WkGy+f4B6cBh+XDxEhtHW9ii7iy1fAxjx+sdjGmQ3nXsRT+UDI5JudMsS1aWRxSHC7jOZ3Jmi9R92rfAQbQM8vH0uNbR6fEmwAcvHSMWXwf794kg4WzR16MaAiGW0TPy1tiXWlZHbzpEg9wgtZQEtDwaUu09GY3BdLne8p3HTWjOc4ipi4/CmoINJ1h4Aguzickkx2a2lunl320HAcsj4U4tIZlMEWiVGnUqxAIXKkC5qxgJPeWpzD1rdPVBjqdAffRd2w214ZGEwJDIiA6jo0crvfmrie9/2cPImJDxqzCw514QGm3zuh79B8T9sIiduGzmDeomJgr1Zbz14TuRBtcmHjQUzImgQSvZc17HiNakg5zD+YtqyYq6vDcH4e6+My08HjgkiFRcqfmyBvLW16ckU+5/G06+ticR9O14S2OuR+QWHxkWNPJGjE1bkyBdvS3jXMcQ+t7R4sRIKE="
export AWS_REGION="us-east-1"
export AWS_DEFAULT_REGION="us-east-1"
terraform init
terraform apply
aws s3 ls
aws s3 website s3://bucket-challenge-fran-1/ --index-document index.html
aws s3api put-public-access-block --bucket bucket-challenge-fran-1 --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
cat <<EOF > policy.json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::bucket-challenge-fran-1/*"
    }
  ]
}
EOF
aws s3api put-bucket-policy --bucket bucket-challenge-fran-1 --policy file://policy.json
aws s3 sync . s3://bucket-challenge-fran-1/
history


http://bucket-challenge-fran-1.s3-website-us-east-1.amazonaws.com/