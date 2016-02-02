# manip

Proof of concept to do the full cycle of local image manipulation to direct upload to S3.

1. Pick local files
2. Turns them into canvas objects
3. Demonstrates manipulation of canvas
4. Turns canvas items into blobs
5. Gets signed URL via [https://github.com/sebringj/siggy](siggy) microservice
6. Uploads file directly to S3 or S3 compatible server.

## Note

The example code uses native promises for convenience but could use polyfill instead
