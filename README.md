# dm-handleSearch
description: Implement a simple function to handle searching within an array of object

# Installation
it's package can be installed by npm , yarn and others...
## npm ( Node Package Manager )
This package can be installed using ```npm``` by the following command </br>
```js
npm i --save dm-handlesearch 
```
## yarn 
This package can be installed using ```yarn``` by the following command </br>
```js 
yarn add dm-handlesearch 
```
# Features
* Synchron Search
* Asynchron Search supported
* Very easy to use
# Use
## Synchron Search
Import ```handleSearch``` from ```dm-handlesearch```
```js
import * as React from 'react';
import { handleSearch } from "dm-handlesearch";

const columns = ['fsname', 'lsname'];

export const SampleUserUI = ({ navigation, route }) => {

    // this is an array of your static data 
    const [userStore, setUsersStore] = React.useState(
        [
            {
                key: 1,
                fsname: 'dav',
                lsname: 'maene',
                phone: '0970284772'
            },
            {
                key: 2,
                fsname: 'darone',
                lsname: 'maene',
                phone: '0851781205'
            },
            ...
        ]
    );

    // filtred rows by search will be pushed in this array
    const [filtred, setFiltred] = React.useState([]);

    const __handleSearch = async (keyword) => {
        await handleSearch({
            rows: userStore,
            keyword,
            columns,
            cb: ({ rows, length, keyword }) => {
                // in this callback the response contains an array of occurrences, the size of this array and the keyword that was used for the search
                setFiltred(rows)
            }
        })
    }

    return (
        <>
        ...
            <div>
                <input onChange={e => __handleSearch(e.target.value) } { ...props } />
            </div>
        ...
        </>
    )
}

```
## Asynchron Search 
Import ```asyncSearch``` from ```dm-handlesearch```
```js
import * as React from 'react';
import { handleSearch, asyncSearch } from "dm-handlesearch";

// determine which columns will be affected by the search
const columns = ['fsname', 'lsname'];

export const SampleUserUI = ({ navigation, route }) => {

    // this is an array of your static data 
    const [userStore, setUsersStore] = React.useState(
        [
            {
                key: 1,
                fsname: 'dav',
                lsname: 'maene',
                phone: '0970284772'
            },
            {
                key: 2,
                fsname: 'darone',
                lsname: 'maene',
                phone: '0851781205'
            },
            ...
        ]
    );

    // filtred rows by search will be pushed in this array
    const [filtred, setFiltred] = React.useState([]);

    const __handleSearch = async (keyword) => {
        asyncSearch({
            rows: userStore,
            keyword,
            columns
        })
        .then(({ rows, length, keyword }) => {
            setFiltred(rows)
        })
        .catch(err => {
            throw err
        })

    }

    return (
        <>
        ...
            <div>
                <input onChange={e => __handleSearch(e.target.value) } { ...props } />
            </div>
        ...
        </>
    )
}

```

```js
If you love this library, give us a star, you will be a ray of sunshine in our lives :) made by love | David Maene
```
