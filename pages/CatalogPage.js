export class CatalogPage {
  constructor(page) {
    this.page = page;
  }

  async search(query) {
    // BEGIN
    await this.page.getByPlaceholder('Search').fill(query);
    // END
  }

  async selectBrand(brand) {
    // BEGIN
    await this.page.getByLabel(brand, { exact: true }).check();
    // END
  }

  async openProduct(name) {
    // BEGIN
    await this.page.getByRole('heading', { name, exact: true }).click();
    // END
  }

  async nextPage() {
    // BEGIN
    // END
  }
}

