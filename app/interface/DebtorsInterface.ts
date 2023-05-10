export interface DebtorsInterface{
    id: number;
    name: string;
    contato: string;
}

export interface AccountsInterface{
    id: number;
    id_devedores: number;
    contas: AccountInterface[]

}

export interface AccountInterface{
    id: number;
    name: string;
    valor: number;
    parcela: number;
    parcelas: string;
    bancos: string;
}