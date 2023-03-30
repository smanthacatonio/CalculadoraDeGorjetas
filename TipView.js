class TipView {
    constructor(tip) {
        this.tip = tip;
    }

    template() {
        return `
            <div>
                <span class="result">Tip Amount</span>
                <span class="per-person"></br>/ person</br></span>
                <strong class="value">$ ${this.tip.tipAmount.toFixed(2)}</strong>
            </div>
            <div>
                <span class="result">Total</span>
                <span class="per-person"></br>/ person</br></span>
                <strong class="value">$ ${this.tip.total.toFixed(2)}</strong>
            </div>
            <div>
                <button id="calc">Calcular</button>
                <button id="resetar">Resetar</button>
            </div>
        `
    }
}