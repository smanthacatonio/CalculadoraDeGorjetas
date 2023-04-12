class TipView {
    constructor(tip) {
        this.tip = tip;
    }

    template() {
        return `
            <div class="show-amount">
                <span class="result">Tip Amount<span class="per-person"></br>/ person</br></span></span>
                <strong class="value">$ ${this.tip.tipAmount.toFixed(2)}</strong>
            </div>
            <div class="show-amount">
                <span class="result">Total<span class="per-person"></br>/ person</br></span></span>
                <strong class="value">$ ${this.tip.total.toFixed(2)}</strong>
            </div>
            <div class="button-calc">
                <button id="calc" class="calc">Calcular</button>
                <button id="resetar" class="calc">Resetar</button>
            </div>
        `
    }
}