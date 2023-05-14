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
    valor_parcela: number;
    parcelas: number;
    parcelas_pagas: number;
    banco: string;
}