# pollute-me
Sample vulnerable app with RCE over prototype pollution

This is a vulnerable project, do not run it on untrusted environments, on open networks and so on


# Run

```shell
$ docker build . -t pollution
$ docker run -p 7777:7777 pollution
```

# Exploit

The goal is to inject a payload on the /update endpoint
And when calling the /compute one, you should be able to make node call `evil.js` (with the `-r` argument)!

;) have fun!

