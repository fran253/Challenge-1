terraform {
    required_providers {
        aws = {
            source = "hashicorp/aws"
        }
    }
}

provider "aws" {
    region = "us-east-1"
}

resource "aws_s3_bucket" "bucket_aula" {
    bucket = "bucket-challenge-fran-1"
    object_lock_enabled = false

    tags = {
        Name = "terraform-s3-aula"
    }
}