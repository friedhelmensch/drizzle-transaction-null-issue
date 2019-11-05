don´t have meta mask or similar things active so drizzle uses the fallback.

- yarn install
- yarn start
- open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- open developer console

        Error in block processing:
        TypeError: Cannot read property 'transactions' of null
         at processBlock\$ (drizzle-store.js:17570)
         at tryCatch (drizzle-store.js:14312)
         at Generator.invoke [as \_invoke](drizzle-store.js:14531)
         at Generator.prototype.<computed> [as next](drizzle-store.js:14365)
         at next (proc.js:362)
         at currCb (proc.js:449)
         at proc.js:567
         at exec (scheduler.js:20)
         at flush (scheduler.js:63)
         at asap (scheduler.js:35)
         at runPutEffect (proc.js:553)
         at runEffect (proc.js:496)
         at next (proc.js:366)
         at proc (proc.js:314)
         at resolveIterator (proc.js:521)
         at runCallEffect (proc.js:584)
         at runEffect (proc.js:496)
         at next (proc.js:366)
         at currCb (proc.js:449)
