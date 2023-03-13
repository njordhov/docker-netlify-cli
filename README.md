# docker-netlify-cli

Minimal setup for using netlify-cli in a docker container,
with the purpose of demonstrating inconsistencies on M1 Macs
when attempting to build or deploy with edge functions.

The example should work on all platforms.
However, it fails on my Mac M1 while bundling edge functions 
when using the netlify cli in docker to `build` or `deploy`.

Here is the output when executing `netlify deploy`:

![image](https://user-images.githubusercontent.com/219448/224598468-dfa8aa52-ab57-4a2c-88fe-e21101781308.png)

Here is the output when executing `netlify build`:

![image](https://user-images.githubusercontent.com/219448/224591786-afd8c1cc-cc0a-4baa-a4c7-32fde35fe58a.png)




