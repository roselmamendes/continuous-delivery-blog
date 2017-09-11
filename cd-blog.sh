case "$1"
 in
 ut) docker run -it --rm -v "$PWD":/usr/src/app -w /usr/src/app -t cd-blog npm run test-local;;
 dc) docker run -it --rm -v "$PWD":/usr/src/app -w /usr/src/app -t cd-blog npm run dependency-check-local;;
 ssa) docker run -it --rm -v "$PWD":/usr/src/app -w /usr/src/app -t cd-blog npm run sec-static-analysis-local;;
 tests) docker run -it --rm -v "$PWD":/usr/src/app -w /usr/src/app -t cd-blog npm run all-tests-local;;
 *)
            echo $"Usage: $0 {ut|dc|ssa|tests}"
            exit 1
esac
