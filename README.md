# react-data-formatter

Biblioteca para formatação de dados para ReactJS / ReactNative.

## Features

- [ **Formatação de CPF**](#formatcpf)
- [ **Formatação de CNPJ**](#formatcnpj)
- [ **Formatação de CPF ou CNPJ**](#formatdocument)
- [ **Formatação de CEP**](#formatzipcode)
- [ **Formatação de números de telefone**](#formatphone)
- [ **Formatação de moeda brasileira**](#formatcurrency)
- [ **Formatação de placa de veículos**](#formatplate)
- [ **Formatação de gêneros**](#formatgender)

### Instalação

Usando NPM

`$ npm install react-data-formatter`

Usando Yarn

`$ yarn add react-data-formatter`

### Uso

#### [**formatCpf**](#formatcpf)
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
`Output:   999.999.999-99`

#### [**formatCnpj**](#formatcnpj)

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
`Output:   99.999.999/9999-99`

#### [**formatDocument**](#formatdocument)

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
`Output:  999.999.999-99 ou 99.999.999/9999-99`

#### [**formatZipcode**](#formatzipcode)

------------


```javascript
import React from 'react'
import { formatZipCode } from 'react-data-formatter'


function Index() {
    return (
        <div>
            <p>{formatZipCode('9999999')}</p>
        </div>
    )
}

export default Index
```
`Output:  99.999-999`


#### [**formatPhone**](#formatphone)

------------
Formatos aceitos: telefone fixo e telefone celular

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
`Output:  (99) 99999-9999`


#### [**formatPlate**](#formatplate)

------------
Formatos aceitos: placas tradicionais e placas formato Mercosul


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
`Output: AAA-1234 ou AAA1A34`


#### [**formatCurrency**](#formatcurrency)

------------

```javascript
import React from 'react'
import { formatCurrency } from 'react-data-formatter'


function Index() {
    return (
        <div>
            <p>{formatCurrency(999999.99)}</p>
        </div>
    )
}

export default Index
```
`Output: R$ 999.999,99`


#### [**formatGender**](#formatgender)

------------

```javascript
import React from 'react'
import { formatGender } from 'react-data-formatter'


function Index() {
    return (
        <div>
            <p>{formatGender('m')}</p>
            <p>{formatGender('f')}</p>
            <p>{formatGender('o')}</p>
            <p>{formatGender('')}</p>
        </div>
    )
}

export default Index
```
`Output: MASCULINO | FEMININO | OUTRO | NÃO INFORMADO`

### Autor

Rodrigo Bianchini
[https://github.com/robianchini](https://github.com/robianchini)
