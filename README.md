# react-data-formatter### Install

Using NPM

`$ npm install react-data-formatter`

Using Yarn

`$ yarn add install react-data-formatter`

### Usage

- **formatCpf**
------------


```javascript
import React from 'react'
import { formatCPF } from 'react-data-formatter'

function Index() {
    return (
        <div>
            <p>{formatCPF('10425156621')}</p>
        </div>
    )
}

export default Index
```
Output:   999.999.999-99

- **formatCnpj**
------------

```javascript
import React from 'react'
import { formatCNPJ } from 'react-data-formatter'


function Index() {
    return (
        <div>
            <p>{formatCNPJ('99999999999999')}</p>
        </div>
    )
}

export default Index
```
Output:   99.999.999/9999-99

- **formatDocument**
------------


```javascript
import React from 'react'
import { formatDocument } from 'react-data-formatter'


function Index() {
    return (
        <div>
            <p>{formatDocument('99999999999')}</p>
            <p>{formatDocument('99999999999999')}</p>
        </div>
    )
}

export default Index
```
Output:  999.999.999-99/ 99.999.999/9999-99

- **formatPhone**
------------


```javascript
import React from 'react'
import { formatPhone } from 'react-data-formatter'


function Index() {
    return (
        <div>
            <p>{formatPhone('99999999999')}</p>
        </div>
    )
}

export default Index
```
Output:  (99) 99999-9999

- **formatPlate**
------------


```javascript
import React from 'react'
import { formatPlate } from 'react-data-formatter'


function Index() {
    return (
        <div>
            <p>{formatPlate('AAA1234')}</p>
			<p>{formatPlate('AAA1A34')}</p>
        </div>
    )
}

export default Index
```
Output: AAA-1234, AAA1A34

export default Index
```
Output: 99.999-999






