const formatPhone = (value) => {
  if (!value) return 'Não informado';

  const phone = String(value);

  if (phone.length === 8) {
    const isFourThousand =
      phone.substring(0, 4) === '4004' || phone.substring(0, 4) === '4003';
    if (isFourThousand)
      return `${phone.substring(0, 4)} ${phone.substring(4, 8)}`;
    if (!isFourThousand)
      return `${phone.substring(0, 4)}-${phone.substring(4, 8)}`;
  }

  if (phone.length === 9) {
    return `${phone.substring(0, 5)}-${phone.substring(5)}`;
  }

  if (phone.length === 10) {
    return `(${phone.substring(0, 2)}) ${phone.substring(
      2,
      6
    )}-${phone.substring(6)}`;
  }

  if (phone.length === 11) {
    const isZeroEight = phone.substring(0, 4) === '0800';
    if (isZeroEight)
      return `${phone.substring(0, 4)} ${phone.substring(
        4,
        7
      )} ${phone.substring(7, 11)}`;
    if (!isZeroEight)
      return `${phone.substring(0, 2)} ${phone.substring(
        2,
        7
      )}-${phone.substring(7, 11)}`;
  }

  if (phone.length === 13) {
    const isInternational = phone.substring(0, 3) === '+55';
    if (isInternational)
      return `${phone.substring(0, 3)} ${phone.substring(
        3,
        5
      )} ${phone.substring(5, 9)}-${phone.substring(9, 13)}`;
  }

  if (phone.length === 14) {
    const isInternational = phone.substring(0, 3) === '+55';
    if (isInternational)
      return `${phone.substring(0, 3)} ${phone.substring(
        3,
        5
      )} ${phone.substring(5, 10)}-${phone.substring(10, 15)}`;
  }
};

const formatZipCode = (value) => {
  if (!value) return 'Não informado';

  const cep = String(value);
  return `${cep.substring(0, 2)}.${cep.substring(2, 5)}-${cep.substring(5, 8)}`;
};

const formatCPF = (value) => {
  if (!value) return 'Não informado';

  const cpf = String(value);
  if (!cpf) return '';
  return cpf.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
};

const formatCNPJ = (value) => {
  if (!value) return 'Não informado';

  const cnpj = String(value);
  if (!cnpj) return '';
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');
};

const formatPlate = (value) => {
  if (!value) return 'Não informado';

  const regexPlate = /^[a-zA-Z]{3}[0-9]{4}$/;
  if (regexPlate.test(value))
    return `${value.substr(0, 3)}-${value.substr(3)}`.toUpperCase();
  return value.toUpperCase();
};

const formatDocument = (value) => {
  if (!value) return 'Não informado';

  const document = String(value);
  if (!document) return '';
  if (document.length < 14) {
    return formatCPF(document);
  }
  return formatCNPJ(document);
};

const formatCurrency = (value) => {
  if (!value) return 'Não informado';
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const formatGender = (value) => {
  if (!value) return 'Não informado';
  if (value === 'm') return 'MASCULINO';
  if (value === 'f') return 'FEMININO';
  if (value !== 'm' && value !== 'f') return 'OUTRO';
};

export {
  formatPhone,
  formatZipCode,
  formatCPF,
  formatCNPJ,
  formatPlate,
  formatDocument,
  formatCurrency,
  formatGender,
};
