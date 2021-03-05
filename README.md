# react-data-formatter

Biblioteca para formatação de dados para ReactJS / ReactNative.

## Features

- [ **Formatação de CPF**](#formatcpf)
- **Formatação de CPF**
- **Formatação de CNPJ**
- **Formatação de CPF ou CNPJ**
- **Formatação de CEP**
- **Formatação de números de telefone**
- **Formatação de moeda brasileira**
- **Formatação de placa de veículos**
- **Formatação de gêneros**
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

#### **formatCnpj**
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

#### **formatDocument**
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

#### **formatPhone**
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

#### **formatPlate**
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

### Autor

Rodrigo Bianchini
[https://github.com/robianchini](https://github.com/robianchini)
