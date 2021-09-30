Write a function which takes a string as its argument. The string will consist of several 'baby' (lowercase) letters, that belong to a 'parent' (uppercase) letter.

The function should return a string that is sorted alphabetically, with the parent letter coming before its babies.

EXAMPLES:

```javascript
herdTheBabies("aA"); //should return 'Aa'
```

```javascript
herdTheBabies("aBA"); //should return 'AaB'
```

```javascript
herdTheBabies("bbaBccAC"); //should return 'AaBbbCcc'
```

- Reach one line solution?
- Other test e.g. "AaaaAAaABbB"
