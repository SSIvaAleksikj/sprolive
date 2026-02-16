import { FrameLocator, Locator, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";



export class AccountNavigationPage {



readonly page: Page;
readonly addAccountNewLink: Locator;
readonly addNewAccountLink: Locator;
readonly openAccountCriteriaInput: Locator;
readonly openAccountFirstnameInput: Locator;
readonly openAccountCompanyInput: Locator;
readonly searchButton: Locator;
readonly mainFrame: (page: Page) => FrameLocator;
readonly wizardFrame: (page: Page) => FrameLocator;
readonly enterLocationInput: (page: Page) => Locator;
readonly billingAddressEnterText: (page: Page) => Locator;
readonly streetNameInput: (page: Page) => Locator;
readonly stateSelect: (page: Page) => Locator;
readonly cityInput: (page: Page) => Locator;
readonly postalCodeInput: (page: Page) => Locator;
readonly nextButton: (page: Page) => Locator;
readonly firstNameInput: (page: Page) => Locator;
readonly lastNameInput: (page: Page) => Locator;
readonly businessNameInput: (page: Page) => Locator;
readonly phoneInput: (page: Page) => Locator;
readonly emailInput: (page: Page) => Locator;
readonly mySearchInput: (page: Page) => Locator;
readonly udfComp5Input: (page: Page) => Locator;
readonly udfComp6Input: (page: Page) => Locator;
readonly udfComp7Input: (page: Page) => Locator;
readonly sameAsAccountCheckbox: (page: Page) => Locator;
readonly propertyTypeSelect: (page: Page) => Locator;
readonly builderSelect: (page: Page) => Locator;
readonly sicSelect: (page: Page) => Locator;
readonly facilitySelect: (page: Page) => Locator;
readonly propertyDescriptionSelect: (page: Page) => Locator;
readonly primarySourceSelect: (page: Page) => Locator;
readonly propertyManagementSelect: (page: Page) => Locator;
readonly siteNoteInput: (page: Page) => Locator;
readonly addAccountOnlyButton: (page: Page) => Locator;
readonly addProgramButton: (page: Page) => Locator;
readonly addDuplicateProceedButton: (page: Page) => Locator;
readonly marinaTextbox: (page: Page) => Locator;
readonly noneRenewalOption: (page: Page) => Locator;
readonly addProgramLabelButton: (page: Page) => Locator;
readonly salesPersonSelect: (page: Page) => Locator;
readonly primaryTargetSelect: (page: Page) => Locator;
readonly sourceSelect: (page: Page) => Locator;
readonly routeSelect: (page: Page) => Locator;
readonly streetNumberInput: (page: Page) => Locator;
readonly streetNameOldInput: (page: Page) => Locator;
readonly postalCodeOldInput: (page: Page) => Locator;
readonly htmlRoot: (page: Page) => Locator;
readonly nextButtonRole: (page: Page) => Locator;
readonly addDuplicateLink: (page: Page) => Locator;
readonly mapCodeInput: (page: Page) => Locator;
readonly table2: (page: Page) => Locator;
readonly finish2Button: (page: Page) => Locator;
readonly sellProgramButton: (page: Page) => Locator;
readonly continueButton: (page: Page) => Locator;
readonly programTextFilter: (page: Page) => Locator;
readonly programSelect: (page: Page) => Locator;
readonly noneRenewalLink: (page: Page) => Locator;
readonly referralEmailLink: (page: Page) => Locator;
readonly salesPersonLink96b: (page: Page) => Locator;
readonly primaryTargetLinkAbcde: (page: Page) => Locator;
readonly routeLink1003: (page: Page) => Locator;
readonly timeRangeRow: (page: Page) => Locator;
readonly timeRangeRowLink: (page: Page) => Locator;
readonly dayLink13: (page: Page) => Locator;
readonly autoFillDatesButton: (page: Page) => Locator;
readonly finishButtonOldUi: (page: Page) => Locator;
readonly resultsTableLinks: (page: Page) => Locator;
readonly resultsTableRows: (page: Page) => Locator;
readonly firstLinkInPage: (page: Page) => Locator;
readonly siteMenuButtonById: (page: Page) => Locator;
readonly siteMenuButtonByRole: (page: Page) => Locator;
readonly addProgramLink: (page: Page) => Locator;
readonly branchDropdown: (page: Page) => Locator;
readonly branchOptions: (page: Page) => Locator;
readonly branchSelect: (page: Page) => Locator;
readonly branchSelect2Container: (page: Page) => Locator;
readonly branchSelect2Options: (page: Page) => Locator;
readonly serviceCenterSelect2Container: (page: Page) => Locator;
readonly serviceCenterSelect2Selection: (page: Page) => Locator;
readonly serviceCenterSelect2Options: (page: Page) => Locator;
readonly serviceCenterSelect: (page: Page) => Locator;
readonly programDropdown: (page: Page) => Locator;
readonly programOptions: (page: Page) => Locator;
readonly programSelect2Container: (page: Page) => Locator;
readonly programSelect2Selection: (page: Page) => Locator;
readonly programSelect2SearchInput: (page: Page) => Locator;
readonly programSelect2Options: (page: Page) => Locator;
readonly estimateTypeSelect: (page: Page) => Locator;
readonly requiredInfoTab: (page: Page) => Locator;
readonly saleInfoSection: (page: Page) => Locator;
readonly requiredInfoCardBody: (page: Page) => Locator;
readonly siteMenuButtonByRoleFrame: (frame: FrameLocator) => Locator;
readonly addProgramLinkFrame: (frame: FrameLocator) => Locator;
readonly salesPersonSelectFrame: (frame: FrameLocator) => Locator;
readonly comboBoxListItems: (frame: FrameLocator) => Locator;
readonly firstLinkInFrame: (frame: FrameLocator) => Locator;
readonly primaryTargetSelectFrame: (frame: FrameLocator) => Locator;
readonly sourceSelectFrame: (frame: FrameLocator) => Locator;
readonly serviceButtonFrame: (frame: FrameLocator) => Locator;
readonly dayLink14Frame: (frame: FrameLocator) => Locator;
readonly anyDayLinkFrame: (frame: FrameLocator) => Locator;
readonly autoFillDatesButtonFrame: (frame: FrameLocator) => Locator;
readonly finishButtonFrame: (frame: FrameLocator) => Locator;
readonly serviceRowsFrame: (frame: FrameLocator) => Locator;
readonly rowLabelInRow: (row: Locator) => Locator;
readonly rowIconInRow: (row: Locator) => Locator;
readonly routeSelectFrame: (frame: FrameLocator) => Locator;
readonly estimateTypeSelectFrame: (frame: FrameLocator) => Locator;
readonly requiredInfoTabFrame: (frame: FrameLocator) => Locator;
readonly saleInfoSectionFrame: (frame: FrameLocator) => Locator;
readonly requiredInfoCardBodyFrame: (frame: FrameLocator) => Locator;
readonly serviceIconFrame: (row: Locator) => Locator;
readonly continueToAddProgramOldUi: Locator

private getFakerCityState() {
  const city = faker.location.city();
  const state = faker.location.state({ abbreviated: true });

  return { city, state };
}




constructor(page: Page) {
this.page = page;
this.addAccountNewLink = page.locator('#_ctl0_mainmenu_lnkAddAccount_18013');
this.addNewAccountLink = page.getByRole('link', { name: 'Add New Account', exact: true });
this.openAccountFirstnameInput = page.getByRole('textbox', { name: 'First Name' });
this.openAccountCompanyInput = page.getByRole('textbox', { name: 'Company' });
this.openAccountSearchButton = page.locator('#search_button');
this.mainFrame = (targetPage: Page) => targetPage.frameLocator('#MainFrameBodyFrame');
this.wizardFrame = (targetPage: Page) => targetPage.frameLocator('iframe[name="ifrmWizard"]');
this.enterLocationInput = (targetPage: Page) => targetPage.getByRole('textbox', { name: 'Enter Location' });
this.billingAddressEnterText = (targetPage: Page) => targetPage.getByText('Billing Address Enter');
this.streetNameInput = (targetPage: Page) => targetPage.locator('#txtStreetName');
this.stateSelect = (targetPage: Page) => targetPage.locator('#txtState');
this.cityInput = (targetPage: Page) => targetPage.locator('#txtCity');
this.postalCodeInput = (targetPage: Page) => targetPage.locator('#txtPostalCode');
this.nextButton = (targetPage: Page) => targetPage.locator('#next');
this.firstNameInput = (targetPage: Page) => targetPage.locator('#txtfirst');
this.lastNameInput = (targetPage: Page) => targetPage.locator('#txtlast');
this.businessNameInput = (targetPage: Page) => targetPage.locator('#txtbusname');
this.phoneInput = (targetPage: Page) => targetPage.locator('#txtphone');
this.emailInput = (targetPage: Page) => targetPage.locator('#txtemail');
this.mySearchInput = (targetPage: Page) => targetPage.locator('#txtmysearch');
this.udfComp5Input = (targetPage: Page) => targetPage.locator('#txtudfcomp5');
this.udfComp6Input = (targetPage: Page) => targetPage.locator('#txtudfcomp6');
this.udfComp7Input = (targetPage: Page) => targetPage.locator('#txtudfcomp7');
this.sameAsAccountCheckbox = (targetPage: Page) => targetPage.getByRole('checkbox', { name: 'Same as Account' });
this.propertyTypeSelect = (targetPage: Page) => targetPage.locator('#ddlproptype');
this.builderSelect = (targetPage: Page) => targetPage.locator('#ddlbuilder');
this.sicSelect = (targetPage: Page) => targetPage.locator('#ddlsic');
this.facilitySelect = (targetPage: Page) => targetPage.locator('#ddlFacility');
this.propertyDescriptionSelect = (targetPage: Page) => targetPage.locator('#ddlpropdescription');
this.primarySourceSelect = (targetPage: Page) => targetPage.locator('#primarysourceDDL');
this.propertyManagementSelect = (targetPage: Page) => targetPage.locator('#ddlpropertymanagementcompany');
this.siteNoteInput = (targetPage: Page) => targetPage.locator('#txtsiteNote');
this.addAccountOnlyButton = (targetPage: Page) => targetPage.getByRole('button', { name: 'Add Account Only' });
this.addProgramButton = (targetPage: Page) => targetPage.getByRole('button', { name: 'Add Program' });
this.addDuplicateProceedButton = (targetPage: Page) => targetPage.getByRole('button', { name: 'Add Duplicate (Proceed)' });
this.marinaTextbox = (targetPage: Page) => targetPage.getByRole('textbox', { name: '!MARINA' });
this.noneRenewalOption = (targetPage: Page) => targetPage.getByRole('option', { name: '[None Renewal]' });
this.addProgramLabelButton = (targetPage: Page) => targetPage.getByLabel('Add Program').getByRole('button', { name: 'Add Program' });
this.salesPersonSelect = (targetPage: Page) => targetPage.locator('#ddlsalesperson2_select');
this.primaryTargetSelect = (targetPage: Page) => targetPage.locator('#ddlPrimaryTarget_select');
this.sourceSelect = (targetPage: Page) => targetPage.locator('#ddlsource_select');
this.routeSelect = (targetPage: Page) => targetPage.locator('#ddlroute_select');
this.streetNumberInput = (targetPage: Page) => targetPage.locator('#criteriaaddcontrol_txtStreetNumber');
this.streetNameOldInput = (targetPage: Page) => targetPage.locator('#criteriaaddcontrol_txtStreetName');
this.postalCodeOldInput = (targetPage: Page) => targetPage.locator('#criteriaaddcontrol_txtPostalCode');
this.htmlRoot = (targetPage: Page) => targetPage.locator('html');
this.nextButtonRole = (targetPage: Page) => targetPage.getByRole('button', { name: 'Next' });
this.addDuplicateLink = (targetPage: Page) => targetPage.locator('#hlAddDupe_1066');
this.mapCodeInput = (targetPage: Page) => targetPage.locator('#txtmapcode');
this.table2 = (targetPage: Page) => targetPage.locator('#Table2');
this.finish2Button = (targetPage: Page) => targetPage.locator('#btnfinish2_125');
this.sellProgramButton = (targetPage: Page) => targetPage.locator('#btnsellpgm2_306');
this.continueButton = (targetPage: Page) => targetPage.getByRole('button', { name: 'Continue' });
this.programTextFilter = (targetPage: Page) => targetPage.locator('#ddlprogram_textFilter');
this.programSelect = (targetPage: Page) => targetPage.locator('#ddlprogram_select');
this.noneRenewalLink = (targetPage: Page) => targetPage.getByRole('link', { name: '[None Renewal]' });
this.referralEmailLink = (targetPage: Page) => targetPage.getByRole('link', { name: 'Referral Email' });
this.salesPersonLink96b = (targetPage: Page) => targetPage.getByRole('link', { name: '96b, Steve' });
this.primaryTargetLinkAbcde = (targetPage: Page) => targetPage.getByRole('link', { name: 'abcde' });
this.routeLink1003 = (targetPage: Page) => targetPage.getByRole('link', { name: '1003' });
this.timeRangeRow = (targetPage: Page) => targetPage.getByRole('row', { name: 'Time Range 5:00AM - 11:00PM Call Ahead Auto-fill dates', exact: true });
this.timeRangeRowLink = (targetPage: Page) => this.timeRangeRow(targetPage).getByRole('link');
this.dayLink13 = (targetPage: Page) => targetPage.getByRole('link', { name: '13' });
this.autoFillDatesButton = (targetPage: Page) => targetPage.getByRole('button', { name: 'Auto-fill dates' });
this.finishButtonOldUi = (targetPage: Page) => targetPage.locator('#btnfinish_295');
this.resultsTableLinks = (targetPage: Page) => targetPage.locator('table tbody tr td a');
this.resultsTableRows = (targetPage: Page) => targetPage.locator('table tbody tr');
this.firstLinkInPage = (targetPage: Page) => targetPage.getByRole('link').first();
this.siteMenuButtonById = (targetPage: Page) => targetPage.locator('#siteMenuBtn');
this.siteMenuButtonByRole = (targetPage: Page) => targetPage.getByRole('button', { name: 'Site Menu' });
this.addProgramLink = (targetPage: Page) => targetPage.getByRole('link', { name: 'Add Program' });
this.branchDropdown = (targetPage: Page) => targetPage.locator('#ddlBranch_select, #ddlBranch, select[name*="branch"], [id^="ddlBranch"]');
this.branchOptions = (targetPage: Page) => targetPage.locator('ul.combo-box-list > li, option');
this.branchSelect = (targetPage: Page) => targetPage.locator('#ddlBranch');
this.branchSelect2Container = (targetPage: Page) => targetPage.locator('#select2-ddlBranch-container');
this.branchSelect2Options = (targetPage: Page) => targetPage.locator('li.select2-results__option[aria-disabled="false"]');
this.serviceCenterSelect2Container = (targetPage: Page) => targetPage.locator('#select2-ddlservicecenter-container');
this.serviceCenterSelect2Selection = (targetPage: Page) => targetPage.locator('span.select2-selection.select2-selection--single[aria-labelledby="select2-ddlservicecenter-container"]');
this.serviceCenterSelect2Options = (targetPage: Page) => targetPage.locator('li.select2-results__option[aria-disabled="false"]');
this.serviceCenterSelect = (targetPage: Page) => targetPage.locator('#ddlservicecenter');
this.programDropdown = (targetPage: Page) => targetPage.locator('#ddlprogram_select, #ddlprogram, select[name*="program"], [id^="ddlprogram"]');
this.programOptions = (targetPage: Page) => targetPage.locator('ul.combo-box-list > li, option');
this.programSelect2Container = (targetPage: Page) => targetPage.locator('#select2-ddlprogram-container');
this.programSelect2Selection = (targetPage: Page) => targetPage.locator('span.select2-selection.select2-selection--single[aria-labelledby="select2-ddlprogram-container"]');
this.programSelect2SearchInput = (targetPage: Page) => targetPage.locator('.select2-container--open input.select2-search__field');
this.programSelect2Options = (targetPage: Page) => targetPage.locator('li.select2-results__option[aria-disabled="false"]');
this.estimateTypeSelect = (targetPage: Page) => targetPage.locator('#ddlestimatetype');
this.requiredInfoTab = (targetPage: Page) => targetPage.getByRole('tab', { name: /Required info/i });
this.saleInfoSection = (targetPage: Page) => targetPage.locator('#nav-required #saleinfoap > div');
this.requiredInfoCardBody = (targetPage: Page) => targetPage.locator('div.card-body.miniheight');
this.siteMenuButtonByRoleFrame = (frame: FrameLocator) => frame.getByRole('button', { name: 'Site Menu' }).first();
this.addProgramLinkFrame = (frame: FrameLocator) => frame.getByRole('link', { name: 'Add Program' }).first();
this.salesPersonSelectFrame = (frame: FrameLocator) => frame.locator('#ddlsalesperson2_select');
this.comboBoxListItems = (frame: FrameLocator) => frame.locator('ul.combo-box-list > li');
this.firstLinkInFrame = (frame: FrameLocator) => frame.getByRole('link').first();
this.primaryTargetSelectFrame = (frame: FrameLocator) => frame.locator('#ddlPrimaryTarget_select');
this.sourceSelectFrame = (frame: FrameLocator) => frame.locator('#ddlsource_select');
this.serviceButtonFrame = (frame: FrameLocator) => frame.locator('#firstservicerow i');
this.dayLink14Frame = (frame: FrameLocator) => frame.getByRole('link', { name: '14' });
this.anyDayLinkFrame = (frame: FrameLocator) => frame.getByRole('link').filter({ hasText: /\d+/ });
this.autoFillDatesButtonFrame = (frame: FrameLocator) => frame.getByRole('button', { name: 'Auto-fill dates' }).first();
this.finishButtonFrame = (frame: FrameLocator) => frame.getByRole('button', { name: 'Finish' }).first();
this.serviceRowsFrame = (frame: FrameLocator) => frame.locator('table tbody tr');
this.rowLabelInRow = (row: Locator) => row.locator('label').first();
this.rowIconInRow = (row: Locator) => row.locator('div i').first();
this.routeSelectFrame = (frame: FrameLocator) => frame.locator('#ddlroute_select');
this.estimateTypeSelectFrame = (frame: FrameLocator) => frame.locator('#ddlestimatetype');
this.requiredInfoTabFrame = (frame: FrameLocator) => frame.getByRole('tab', { name: /Required info/i });
this.saleInfoSectionFrame = (frame: FrameLocator) => frame.locator('#nav-required #saleinfoap > div');
this.requiredInfoCardBodyFrame = (frame: FrameLocator) => frame.locator('div.card-body.miniheight');
this.serviceIconFrame = (row: Locator) => row.locator('i').first();
this.continueToAddProgramOldUi = page.locator('tr').locator('#btncontinue_4296');
}

/*
//Add New Account New - Account Only

//////////////////////////////////////////////////////////////////////////////////////////////////////


async AddNewAccountNewAccountOnly() {

let page2: Page;
try {
const [newPage] = await Promise.all([
 this.page.context().waitForEvent('page', { timeout: 10000 }),
 this.addAccountNewLink.click()
]);
page2 = newPage;
} catch {
await this.addAccountNewLink.click().catch(() => {});
page2 = this.page;
}




page2.setDefaultTimeout(10000);
page2.setDefaultNavigationTimeout(10000);


const addAccountUrl = new URL('/account/quickaddentry1.aspx', this.page.url()).toString();
if (!page2.url().includes('/account/quickaddentry1.aspx')) {
await page2.goto(addAccountUrl, { waitUntil: 'domcontentloaded' });
}
const enterLocation = this.enterLocationInput(page2);
await enterLocation.waitFor({ state: 'visible', timeout: 10000 });






const city = faker.location.city();
const state = faker.location.state({ abbreviated: true });
const zip = faker.location.zipCode("#####");
const street = faker.location.street();
const streetAddress = faker.location.streetAddress();
const location = `${streetAddress}, ${city}, ${state} ${zip}, United States`;
await this.enterLocationInput(page2).dblclick();
await this.enterLocationInput(page2).fill(location);
await this.enterLocationInput(page2).dblclick();
await page2.locator('#ui-id-4').waitFor({ state: 'hidden', timeout: 500 }).catch(() => {});
await this.billingAddressEnterText(page2).press('Tab');
await this.streetNameInput(page2).click();
await this.streetNameInput(page2).fill(street);
await this.stateSelect(page2).selectOption(state);
await this.cityInput(page2).click();
await this.cityInput(page2).fill(city);
await this.postalCodeInput(page2).click();
await this.postalCodeInput(page2).fill('94005');
await this.nextButton(page2).click();
await this.firstNameInput(page2).click();
await this.firstNameInput(page2).fill('Falcon');
await this.firstNameInput(page2).fill('Falcon Auto ');
await this.lastNameInput(page2).fill('AddNewAccountNew');
await this.businessNameInput(page2).click();
await this.businessNameInput(page2).fill('Falcon');
await this.phoneInput(page2).click();
await this.phoneInput(page2).fill('(520) 385-6420');
await this.emailInput(page2).click();
await this.emailInput(page2).fill('dbojkovski@fieldroutes.com');
await this.mySearchInput(page2).click();
await this.mySearchInput(page2).fill('123123');
await this.udfComp5Input(page2).click();
await this.udfComp5Input(page2).fill('321321');
await this.udfComp6Input(page2).click();
await this.udfComp6Input(page2).fill('345345');
await this.nextButton(page2).click();
await this.sameAsAccountCheckbox(page2).check();
await this.propertyTypeSelect(page2).selectOption({ index: 1 });
await this.builderSelect(page2).selectOption({ index: 1 });
await this.sicSelect(page2).selectOption({ index: 1 });
await this.facilitySelect(page2).selectOption({ index: 1 });
await this.propertyDescriptionSelect(page2).selectOption({ index: 1 });
await this.primarySourceSelect(page2).selectOption({ index: 0 });
await this.propertyManagementSelect(page2).selectOption({ index: 1 });
await this.siteNoteInput(page2).click();
await this.siteNoteInput(page2).fill('Test Auto');
await this.addAccountOnlyButton(page2).click();



}

//////////////////////////////////////////////////////////////////////////////////////////////////

//Add New Account New - Account and Program added


async AddNewAccountNewAccountAndProgram() {




let page2: Page;
try {
const [newPage] = await Promise.all([
 this.page.context().waitForEvent('page', { timeout: 10000 }),
 this.addAccountNewLink.click()
]);
page2 = newPage;
} catch {
await this.addAccountNewLink.click().catch(() => {});
page2 = this.page;
}




page2.setDefaultTimeout(10000);
page2.setDefaultNavigationTimeout(10000);


const addAccountUrl = new URL('/account/quickaddentry1.aspx', this.page.url()).toString();
if (!page2.url().includes('/account/quickaddentry1.aspx')) {
await page2.goto(addAccountUrl, { waitUntil: 'domcontentloaded' });
}
const enterLocation = this.enterLocationInput(page2);
await enterLocation.waitFor({ state: 'visible', timeout: 10000 });






const city = faker.location.city();
const state = faker.location.state({ abbreviated: true });
const zip = faker.location.zipCode("#####");
const street = faker.location.street();
const streetAddress = faker.location.streetAddress();
const location = `${streetAddress}, ${city}, ${state} ${zip}, United States`;
await this.enterLocationInput(page2).dblclick();
await this.enterLocationInput(page2).fill(location);
await this.enterLocationInput(page2).dblclick();
await page2.locator('#ui-id-4').waitFor({ state: 'hidden', timeout: 500 }).catch(() => {});
await this.billingAddressEnterText(page2).press('Tab');
await this.streetNameInput(page2).click();
await this.streetNameInput(page2).fill(street);
await this.stateSelect(page2).selectOption(state);
await this.cityInput(page2).click();
await this.cityInput(page2).fill(city);
await this.postalCodeInput(page2).click();
await this.postalCodeInput(page2).fill('94005');
await this.nextButton(page2).click();
await this.firstNameInput(page2).click();
await this.firstNameInput(page2).fill('Falcon');
await this.firstNameInput(page2).fill('Falcon Auto ');
await this.lastNameInput(page2).fill('AddNewAccountNew');
await this.businessNameInput(page2).click();
await this.businessNameInput(page2).fill('Falcon');
await this.phoneInput(page2).click();
await this.phoneInput(page2).fill('(520) 385-6420');
await this.emailInput(page2).click();
await this.emailInput(page2).fill('dbojkovski@fieldroutes.com');
await this.mySearchInput(page2).click();
await this.mySearchInput(page2).fill('123123');
await this.udfComp5Input(page2).click();
await this.udfComp5Input(page2).fill('321321');
await this.udfComp6Input(page2).click();
await this.udfComp6Input(page2).fill('345345');
await this.nextButton(page2).click();
await this.sameAsAccountCheckbox(page2).check();
await this.propertyTypeSelect(page2).selectOption({ index: 1 });
await this.builderSelect(page2).selectOption({ index: 1 });
await this.sicSelect(page2).selectOption({ index: 1 });
await this.facilitySelect(page2).selectOption({ index: 1 });
await this.propertyDescriptionSelect(page2).selectOption({ index: 1 });
await this.primarySourceSelect(page2).selectOption({ index: 0 });
await this.propertyManagementSelect(page2).selectOption({ index: 1 });
await this.siteNoteInput(page2).click();
await this.siteNoteInput(page2).fill('Test Auto');

let programPage = page2;
try {
const [popup] = await Promise.all([
 page2.waitForEvent('popup', { timeout: 5000 }),
 this.addProgramButton(page2).click()
]);
programPage = popup;
} catch {
await this.addProgramButton(page2).click().catch(() => {});
}


programPage.setDefaultTimeout(10000);
programPage.setDefaultNavigationTimeout(10000);


if (programPage.isClosed()) {
throw new Error('AddNewAccountNewAccountAndProgram: program page closed before selection.');
}


await programPage.waitForLoadState('domcontentloaded', { timeout: 10000 }).catch(() => {});
if (programPage.isClosed()) {
return;
}


if (programPage.isClosed()) {
return;
}


const selectHiddenOption = async (
selectSelector: string,
labelText: string,
containerSelector?: string
) => {
return programPage.evaluate(
  ({ selectSelector, labelText, containerSelector }) => {
    const selectEl = document.querySelector<HTMLSelectElement>(selectSelector);
    if (!selectEl) return false;
    const option = Array.from(selectEl.options).find(opt =>
      (opt.textContent || '').includes(labelText)
    ) || selectEl.options[0];
    if (!option) return false;
    selectEl.value = option.value;
    selectEl.dispatchEvent(new Event('change', { bubbles: true }));
    selectEl.dispatchEvent(new Event('input', { bubbles: true }));
    if (containerSelector) {
      const container = document.querySelector(containerSelector);
      if (container) container.textContent = option.textContent || '';
    }
    return true;
  },
  { selectSelector, labelText, containerSelector }
);
};



try {
// Click the <li> with the desired text (Falcon Auto Test Program Renewal) in the Select2 dropdown
const programSelection = this.programSelect2Selection(programPage).first();
if (await programSelection.count() > 0) {
  if (await programSelection.isVisible().catch(() => false)) {
    await programSelection.click({ force: true });
    await programPage.locator('#select2-ddlprogram-results').waitFor({ state: 'visible', timeout: 10000 });
  }
}
const programSearch = this.programSelect2SearchInput(programPage);
if (await programSearch.count() > 0) {
  await programSearch.fill('');
  await programSearch.fill('Falcon Auto Test Program Renewal');
}
const programOption = this.programSelect2Options(programPage)
  .filter({ hasText: 'Falcon Auto Test Program Renewal' })
  .first();
if (await programOption.count() > 0) {
  await programOption.waitFor({ state: 'visible', timeout: 10000 });
  await programOption.click({ force: true });
  console.log('Clicked <li> with text: Falcon Auto Test Program Renewal');
} else {
  // Fallback: try clicking by ID if known (example ID)
  const fallbackById = programPage.locator('#select2-ddlprogram-result-dkc3-658');
  if (await fallbackById.count() > 0 && await fallbackById.isVisible().catch(() => false)) {
    await fallbackById.click({ force: true });
    console.log('Clicked <li> by ID: #select2-ddlprogram-result-dkc3-658');
  } else {
    console.warn('Program option not found in Select2 dropdown.');
  }
}
   try {
     await programPage.waitForFunction(
       (expectedText) => {
         const el = document.querySelector('#select2-ddlprogram-container');
         return !!el && !!el.textContent && el.textContent.includes(expectedText);
       },
       'Falcon Auto Test Program Renewal',
       { timeout: 8000 }
     );
   } catch {
     await programPage.evaluate((expectedText) => {
       const selectCandidates = [
         document.querySelector<HTMLSelectElement>('#ddlprogram'),
         document.querySelector<HTMLSelectElement>('#ddlprogram_select')
       ].filter(Boolean) as HTMLSelectElement[];




       for (const select of selectCandidates) {
         const option = Array.from(select.options).find(opt =>
           (opt.textContent || '').includes(expectedText)
         );
         if (option) {
           select.value = option.value;
           select.dispatchEvent(new Event('change', { bubbles: true }));
           select.dispatchEvent(new Event('input', { bubbles: true }));
           break;
         }
       }
     }, 'Falcon Auto Test Program Renewal');




     await programPage.waitForFunction(
       (expectedText) => {
         const el = document.querySelector('#select2-ddlprogram-container');
         return !!el && !!el.textContent && el.textContent.includes(expectedText);
       },
       'Falcon Auto Test Program Renewal',
       { timeout: 8000 }
     );
   }
 } else {
   const programDropdown = this.programDropdown(programPage).first();
   if (await programDropdown.count() > 0) {
     await programDropdown.waitFor({ state: 'visible', timeout: 10000 });
     await programDropdown.dblclick();
     await programPage.waitForTimeout(300);


     const programOption = this.programOptions(programPage)
       .filter({ hasText: 'Falcon Auto Test Program Renewal' })
       .first();
     if (await programOption.count() > 0) {
       await programOption.dblclick();
     } else {
       const programFallback = this.programOptions(programPage).first();
       if (await programFallback.count() > 0) await programFallback.click();
     }
   }
 }
}
} catch (e) {
console.warn('Program selection failed:', e);
}
try {
const programFrame = this.mainFrame(programPage);
const hasFrame = (await programFrame.locator('body').count()) > 0;
const requiredTab = hasFrame
  ? this.requiredInfoTabFrame(programFrame)
  : this.requiredInfoTab(programPage);




if (await requiredTab.count() > 0) {
  await requiredTab.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
  await requiredTab.click().catch(() => {});
}



const detailsFrame = this.mainFrame(programPage);
const renewalFeeInput = detailsFrame.locator(
  '#txtRenewalFee, #txtrenewalfee, input[name*="renewal"][type="text"]'
);
if (await renewalFeeInput.count() > 0) {
  await renewalFeeInput.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
  await renewalFeeInput.fill('25');
} else {
  const renewalFeeFallback = programPage.locator(
    '#txtRenewalFee, #txtrenewalfee, input[name*="renewal"][type="text"]'
  );
  if (await renewalFeeFallback.count() > 0) {
    await renewalFeeFallback.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
    await renewalFeeFallback.fill('25');
  }
}



} catch (e) {
console.warn('Required info tab interaction failed:', e);
}


const programOptionFinal = programPage.getByRole('option', { name: 'Falcon Auto Test Program' });
if (await programOptionFinal.count() > 0) {
  await programOptionFinal.click();
}




let detailsPage = programPage;
const addProgramButton = programPage.getByLabel('Add Program').getByRole('button', { name: 'Add Program' });
if (await addProgramButton.count() > 0) {
 try {
   const [popup] = await Promise.all([
     programPage.waitForEvent('popup', { timeout: 5000 }),
     addProgramButton.click()
   ]);
   detailsPage = popup;
 } catch {
   await addProgramButton.click().catch(() => {});
 }
}



await detailsPage.waitForLoadState('domcontentloaded', { timeout: 10000 }).catch(() => {});
if (!detailsPage.isClosed()) {
 const detailsFrame = detailsPage.frameLocator('#MainFrameBodyFrame');
 const estimateTypeSelect = detailsFrame.locator('#ddlestimatetype');
 if (await estimateTypeSelect.count() > 0) {
   await estimateTypeSelect.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
   await estimateTypeSelect.selectOption('259');
 }


 const selectByIndex = async (trigger: Locator) => {
   if (await trigger.count() === 0) return;
  await trigger.scrollIntoViewIfNeeded().catch(() => {});
  await trigger.evaluate((el) => (el as HTMLElement).focus()).catch(() => {});
   const options = detailsFrame.locator('ul.combo-box-list > li, li[role="option"]');
   const optionCount = await options.count();
   const targetIndex = optionCount > 2 ? 2 : optionCount > 1 ? 1 : 0;
   const pressCount = optionCount > 0 ? targetIndex + 1 : 1;
   for (let i = 0; i < pressCount; i++) {
     await trigger.press('ArrowDown');
     await trigger.press('ArrowDown');
   }
   await trigger.press('Enter');
 };




 const salesPersonSelect = detailsFrame.locator('#ddlsalesperson2_select');
 const salesPersonFilter = detailsFrame.locator('#ddlsalesperson2_textFilter');
 if (await salesPersonFilter.count() > 0) {
   await salesPersonSelect.click({ force: true }).catch(() => {});
   const salesOptions = detailsFrame.locator('ul.combo-box-list > li, li[role="option"]');
   const firstNonNone = salesOptions.filter({ hasNotText: /none/i }).first();
   if (await firstNonNone.count() > 0) {
     await firstNonNone.click({ force: true });
   } else {
     const selectEl = detailsFrame.locator('select#ddlsalesperson2, select[name="ddlsalesperson2"]');
     if (await selectEl.count() > 0) {
       await selectEl.selectOption({ index: 1 }).catch(() => {});
     }
     await salesPersonFilter.click();
     await salesPersonFilter.press('ArrowDown');
     await salesPersonFilter.press('Enter');
   }
 }


 await selectByIndex(detailsFrame.locator('#ddlTax_select'));
 await selectByIndex(detailsFrame.locator('#ddlroute_select'));
 await selectByIndex(detailsFrame.locator('#ddlsourceemployee_select'));


 const sourceTrigger = detailsFrame.locator('#ddlsource_select');
 if (await sourceTrigger.count() > 0) {
   await sourceTrigger.click({ force: true }).catch(() => {});
   const pickedValue = await detailsFrame.locator('body').evaluate(() => {
     const listItems = Array.from(
       document.querySelectorAll<HTMLLIElement>('#ddlsource_content .combo-box-list > li')
     );
     const candidate = listItems.find(item => item.getAttribute('itemvalue') !== '0');
     if (!candidate) return null;
     const link = candidate.querySelector('a') || candidate;
     (link as HTMLElement).click();
     return candidate.getAttribute('itemvalue');
   });


   const sourceSelect = detailsFrame.locator(
     'select#ddlsource, select[name="ddlsource"], select[name="ddlsource_select"]'
   );
   if (pickedValue && (await sourceSelect.count() > 0)) {
     await sourceSelect.first().selectOption({ value: pickedValue }).catch(() => {});
   } else if (await sourceSelect.count() > 0) {
     await sourceSelect.first().selectOption({ index: 0 }).catch(() => {});
   }


   await detailsFrame.locator('body').evaluate(() => {
     const selectCandidates = [
       document.querySelector<HTMLSelectElement>('#ddlsource'),
       document.querySelector<HTMLSelectElement>('select[name="ddlsource"]'),
       document.querySelector<HTMLSelectElement>('select[name="ddlsource_select"]')
     ].filter(Boolean) as HTMLSelectElement[];
     const selectEl = selectCandidates[0];
     const options = selectEl?.options;
     if (!options || options.length === 0) return;
     const selectedIndex = typeof selectEl?.selectedIndex === 'number' ? selectEl.selectedIndex : -1;
     const selectedOption = options[selectedIndex] || options[0];
     if (!selectedOption) return;
     const text = (selectedOption.textContent || '').trim();
     const filterCandidates = Array.from(
       document.querySelectorAll<HTMLInputElement>('#ddlsource_textFilter')
     );
     const filter = filterCandidates.find(el => el.offsetParent !== null) || filterCandidates[0];
     if (filter) {
       filter.value = text;
       filter.dispatchEvent(new Event('input', { bubbles: true }));
       filter.dispatchEvent(new Event('change', { bubbles: true }));
     }
   });


   await detailsFrame.locator('body').press('Escape').catch(() => {});
   await detailsPage.waitForTimeout(200).catch(() => {});
 }


 const primaryTargetFilter = detailsFrame.locator('#ddlPrimaryTarget_textFilter');
 if (await primaryTargetFilter.count() > 0) {
   await primaryTargetFilter.click();
   await primaryTargetFilter.press('ArrowDown');
   await primaryTargetFilter.press('ArrowDown');
   await primaryTargetFilter.press('Enter');
 } else {
   await selectByIndex(detailsFrame.locator('#ddlPrimaryTarget_select'));
 }


 const renewalFee = faker.number.int({ min: 10, max: 99 }).toString();
 const boosterFee = faker.number.int({ min: 10, max: 99 }).toString();
 const renewalFeeInput = detailsFrame.locator('#txtrenewalfee');
 if (await renewalFeeInput.count() > 0) {
   await renewalFeeInput.click();
   await renewalFeeInput.fill(renewalFee);
 }
 const boosterFeeInput = detailsFrame.locator('#txtboosterfee');
 if (await boosterFeeInput.count() > 0) {
   await boosterFeeInput.click();
   await boosterFeeInput.fill(boosterFee);
 }

 const formatDate = (date: Date) => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
 const today = new Date();
 const tomorrow = new Date(today);
 tomorrow.setDate(today.getDate() + 1);
 const todayStr = formatDate(today);
 const tomorrowStr = formatDate(tomorrow);

 const setDateInput = async (input: Locator, value: string) => {
   if (await input.count() === 0) return false;
   await input.fill(value);
   await input.evaluate((el, v) => {
     const inputEl = el as HTMLInputElement;
     inputEl.value = v as string;
     inputEl.dispatchEvent(new Event('input', { bubbles: true }));
     inputEl.dispatchEvent(new Event('change', { bubbles: true }));
   }, value);
   return true;
 };


 const endCommDateInput = detailsFrame.locator('#txtEndCommDate, input[name="txtEndCommDate"]');
 await setDateInput(endCommDateInput, todayStr);


 const firstServiceDateInput = detailsFrame.locator('#txtfirstservice, input[name="txtfirstservice"]');
 await setDateInput(firstServiceDateInput, tomorrowStr);

 const todayDateInput = detailsFrame.locator(
   '#txtstartdate, input[name="txtstartdate"], #txtstart, input[name="txtstart"]'
 );
 const setToday = await setDateInput(todayDateInput, todayStr);
 if (!setToday) {
   const datePickers = detailsFrame.locator('input.hasDatepicker');
   const datePickerCount = await datePickers.count();
   if (datePickerCount > 0) {
     const firstServiceCount = await firstServiceDateInput.count();
     const targetIndex = firstServiceCount > 0 && datePickerCount > 1 ? 1 : 0;
     if (!(firstServiceCount > 0 && datePickerCount === 1)) {
       await setDateInput(datePickers.nth(targetIndex), todayStr);
     }
   }
 }



 // Skip calendar icon click; date inputs are filled directly above.

 const autoFill = detailsFrame.getByRole('button', { name: 'Auto-fill dates' });
 if (await autoFill.count() > 0) await autoFill.click();



 detailsPage.once('dialog', dialog => {
   console.log(`Dialog message: ${dialog.message()}`);
   dialog.dismiss().catch(() => {});
 });
 const finishButton = detailsFrame.getByRole('button', { name: 'Finish' });
 if (await finishButton.count() > 0) {
   await finishButton.click();
 }
}








}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async AddNewAccountOldAccountOnly() {



const [page1] = await Promise.all([
    this.page.context().waitForEvent('page'),  // Wait for the new tab
 this.addNewAccountLink.click()
])
await this.firstNameInput(page1).click();
await this.firstNameInput(page1).fill('Falcon');
await this.lastNameInput(page1).click();
await this.lastNameInput(page1).fill('TestAuto');
await this.businessNameInput(page1).click();
await this.businessNameInput(page1).fill('Falcon');
await this.phoneInput(page1).click();
await this.phoneInput(page1).fill('(520) 385-6420');
await this.emailInput(page1).click();
await this.emailInput(page1).fill('dbojkovski@fieldroutes.com');
const { city, state } = this.getFakerCityState();
const postalCode = faker.location.zipCode("#####");
const streetNumber = faker.location.buildingNumber();
const streetName = faker.location.street();



await this.streetNumberInput(page1).click();
await this.streetNumberInput(page1).fill(streetNumber);
await this.streetNameOldInput(page1).click();
await this.streetNameOldInput(page1).fill(streetName);
await this.postalCodeOldInput(page1).click();
await this.postalCodeOldInput(page1).fill(postalCode);
const cityInput = page1.locator('#criteriaaddcontrol_txtCity, #txtCity');
if (await cityInput.count() > 0) {
  const cityField = cityInput.first();
  await cityField.click().catch(() => {});
  await cityField.fill(city).catch(() => {});
}
const stateInput = page1.locator('#criteriaaddcontrol_txtState, #txtState');
if (await stateInput.count() > 0) {
  const stateField = stateInput.first();
  const tagName = await stateField.evaluate(el => el.tagName.toLowerCase()).catch(() => '');
  if (tagName === 'select') {
    await stateField.selectOption(state).catch(async () => {
      await stateField.selectOption({ label: state }).catch(() => {});
    });
  } else {
    await stateField.click().catch(() => {});
    await stateField.fill(state).catch(() => {});
  }
}
await this.htmlRoot(page1).click();
await page1.waitForTimeout(5000);
page1.on('dialog', dialog => {
  console.log(`Dialog message: ${dialog.message()}`);
  dialog.accept().catch(() => dialog.dismiss().catch(() => {}));
});
await this.nextButtonRole(page1).click();
await page1.waitForTimeout(5000);
await this.addDuplicateLink(page1).click();
await this.sameAsAccountCheckbox(page1).check();
await this.propertyTypeSelect(page1).selectOption('1');
await this.propertyTypeSelect(page1).click();
await this.mapCodeInput(page1).click();
await this.mapCodeInput(page1).fill('123123');
await this.table2(page1).click();
await this.finish2Button(page1).click();
await page1.waitForTimeout(5000);





};



//Add New Account OldUI - Account and Program Added


///////////////////////////////////////////////////////////////////////////////////////////////////////////


async AddNewAccountOldUIAccountAndProgram() {



const [page1] = await Promise.all([
    this.page.context().waitForEvent('page'),  // Wait for the new tab
 this.addNewAccountLink.click()
])

await page1.locator('#ddlTitle').selectOption('Mr.');
await page1.locator('#txtmiddle').click();
await page1.locator('#txtmiddle').fill('PW');
await page1.locator('#criteriaaddcontrol_txtaddline2').click();
await page1.locator('#criteriaaddcontrol_txtaddline2').fill('ASDFDSA');
await this.firstNameInput(page1).click();
await this.firstNameInput(page1).fill('Falcon');
await this.lastNameInput(page1).click();
await this.lastNameInput(page1).fill('TestAuto');
await this.businessNameInput(page1).click();
await this.businessNameInput(page1).fill('Falcon');
await this.phoneInput(page1).click();
await this.phoneInput(page1).fill('(520) 385-6420');
await this.emailInput(page1).click();
await this.emailInput(page1).fill('dbojkovski@fieldroutes.com');
const { city, state } = this.getFakerCityState();
const postalCode = faker.location.zipCode("#####");
const streetNumber = faker.location.buildingNumber();
const streetName = faker.location.street();


await this.streetNumberInput(page1).click();
await this.streetNumberInput(page1).fill(streetNumber);
await this.streetNameOldInput(page1).click();
await this.streetNameOldInput(page1).fill(streetName);
await this.postalCodeOldInput(page1).click();
await this.postalCodeOldInput(page1).fill(postalCode);
const cityInput = page1.locator('#criteriaaddcontrol_txtCity, #txtCity');
if (await cityInput.count() > 0) {
  const cityField = cityInput.first();
  await cityField.click().catch(() => {});
  await cityField.fill(city).catch(() => {});
}
const stateInput = page1.locator('#criteriaaddcontrol_txtState, #txtState');
if (await stateInput.count() > 0) {
  const stateField = stateInput.first();
  const tagName = await stateField.evaluate(el => el.tagName.toLowerCase()).catch(() => '');
  if (tagName === 'select') {
    await stateField.selectOption(state).catch(async () => {
      await stateField.selectOption({ label: state }).catch(() => {});
    });
  } else {
    await stateField.click().catch(() => {});
    await stateField.fill(state).catch(() => {});
  }
}
await this.htmlRoot(page1).click();
await page1.waitForTimeout(5000);
page1.once('dialog', dialog => {
console.log(`Dialog message: ${dialog.message()}`);
dialog.dismiss().catch(() => {});
});
await this.nextButtonRole(page1).click();
await page1.waitForTimeout(5000);
const sameAsCheckbox = this.sameAsAccountCheckbox(page1);
if (await sameAsCheckbox.count() === 0) {
  const addDuplicate = this.addDuplicateLink(page1);
  if (await addDuplicate.count() > 0) {
    await addDuplicate.click().catch(() => {});
  }
}
if (await sameAsCheckbox.count() > 0) {
  await sameAsCheckbox.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
  await sameAsCheckbox.check().catch(() => {});
} else {
  const mainFrame = this.mainFrame(page1);
  const sameAsFrameCheckbox = mainFrame.getByRole('checkbox', { name: 'Same as Account' });
  if (await sameAsFrameCheckbox.count() > 0) {
    await sameAsFrameCheckbox.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
    await sameAsFrameCheckbox.check().catch(() => {});
  }
}
const billingCenterSelect = page1.locator('#ddlbillcenter');
if (await billingCenterSelect.count() > 0) {
  await billingCenterSelect.selectOption({ value: '212' }).catch(async () => {
    await billingCenterSelect.selectOption({ label: 'Falcon Auto Test Branch' }).catch(() => {});
  });
}
if (page1.isClosed()) {
  return;
}
await page1.waitForLoadState('domcontentloaded').catch(() => {});
const propertyTypeSelect = this.propertyTypeSelect(page1);
if (await propertyTypeSelect.count() > 0) {
  await propertyTypeSelect.selectOption('1').catch(() => {});
  await propertyTypeSelect.click().catch(() => {});
}
await this.mapCodeInput(page1).click();
await this.mapCodeInput(page1).fill('123123');
const sellProgramButton = page1.locator('#btnsellpgm_306, [name="btnsellpgm_306"]');
let programPage = page1;
if (await sellProgramButton.count() > 0) {
  const popupPromise = page1.waitForEvent('popup', { timeout: 10000 }).catch(() => null);
  await sellProgramButton.click({ timeout: 10000 });
  const popup = await popupPromise;
  if (popup) programPage = popup;
}

await programPage.waitForLoadState('domcontentloaded').catch(() => {});
if (!programPage.isClosed()) {
  const serviceCenterDropdown = programPage.locator('#ddlscenter_select');
  if (await serviceCenterDropdown.count() > 0) {
    await serviceCenterDropdown.click().catch(() => {});
    const serviceCenterOption = programPage
      .locator('ul.combo-box-list > li')
      .filter({ hasText: 'Falcon Auto Test Branch' })
      .first();
    if (await serviceCenterOption.count() > 0) {
      await serviceCenterOption.click().catch(() => {});
    } else {
      const fallbackOption = programPage.locator('ul.combo-box-list > li').first();
      if (await fallbackOption.count() > 0) await fallbackOption.click().catch(() => {});
    }
  }

// Locator and popup handling for the Continue button (btncontinue_4296)
const continueButton = page1.locator('#btncontinue_4296, [name="btncontinue_4296"]');
let continuePage = page1;
if (await continueButton.count() > 0) {
  const popupPromise = page1.waitForEvent('popup', { timeout: 10000 }).catch(() => null);
  await continueButton.click({ timeout: 10000 });
  const popup = await popupPromise;
  if (popup) continuePage = popup;

  await continuePage.waitForLoadState('domcontentloaded').catch(() => {});
}
await continuePage.locator('#ddlprogram_select').click();
try {
  // Find all <a> elements under <tr> and log their text/href/visibility
  const allProgramLinks = await continuePage.locator('tr a').all();
  let found = false;
  for (const link of allProgramLinks) {
    const text = (await link.textContent()) || '';
    const href = await link.getAttribute('href');
    const visible = await link.isVisible().catch(() => false);
    const enabled = await link.isEnabled().catch(() => false);
    if (text.includes('Falcon Auto Test Program Renewal') && visible && enabled) {
      console.log('Clicking program link:', { text, href, visible, enabled });
      try {
        await link.click({ timeout: 2000 });
      } catch (e) {
        // Try JS click if normal click fails
        console.warn('Normal click failed, trying JS click');
        await continuePage.evaluate(el => el.click(), await link.elementHandle());
      }
      found = true;
      break;
    } else {
      console.log('Found <a> candidate:', { text, href, visible, enabled });
    }
  }
  if (!found) {
    // Fallback: try any <a> with similar text
    const fallbackLinks = await continuePage.locator('a').all();
    for (const link of fallbackLinks) {
      const text = (await link.textContent()) || '';
      const href = await link.getAttribute('href');
      const visible = await link.isVisible().catch(() => false);
      const enabled = await link.isEnabled().catch(() => false);
      if (text.includes('Falcon Auto Test Program') && visible && enabled) {
        console.log('Clicking fallback program link:', { text, href, visible, enabled });
        try {
          await link.click({ timeout: 2000 });
        } catch (e) {
          // Try JS click if normal click fails
          console.warn('Normal click failed, trying JS click');
          await continuePage.evaluate(el => el.click(), await link.elementHandle());
        }
        found = true;
        break;
      }
    }
  }
  if (!found) {
    // Try direct text input into the dropdown filter if available
    const filterInput = continuePage.locator('#ddlprogram_textFilter, input[id*="ddlprogram_textFilter"], input.combo-box-filter');
    if (await filterInput.count() > 0) {
      await filterInput.fill('Falcon Auto Test Program Renewal');
      await filterInput.dblclick();
      await filterInput.press('ArrowDown');
      await filterInput.press('Enter');
      await filterInput.press('Enter');
      await continuePage.waitForTimeout(500);
      // Try to select the first visible option after filtering
      const filteredOption = continuePage.locator('ul.combo-box-list > li, li[role="option"]').filter({ hasText: 'Falcon Auto Test Program Renewal' }).first();
      if (await filteredOption.count() > 0) {
        await filteredOption.click();
        found = true;
        console.log('Selected program via direct text input.');
      }
    }
    if (!found) {
      // Log for debug if not found
      const allLinks = await continuePage.locator('tr a').allTextContents();
      const allHref = await continuePage.locator('tr a').evaluateAll(nodes => nodes.map(n => ({ text: n.textContent, href: n.getAttribute('href') })));
      console.warn('Program link not found. Available <tr> links:', allLinks, allHref);
      // Take screenshot and dump DOM for debug
      await continuePage.screenshot({ path: 'program_link_not_found.png', fullPage: true }).catch(() => {});
      const domDump = await continuePage.content().catch(() => '');
      try {
        require('fs').writeFileSync('program_link_not_found.html', domDump);
      } catch {}
    }
  }
} catch (e) {
  // On error, take screenshot and dump DOM for debug
  await continuePage.screenshot({ path: 'program_link_error.png', fullPage: true }).catch(() => {});
  const domDump = await continuePage.content().catch(() => '');
  try { require('fs').writeFileSync('program_link_error.html', domDump); } catch {}
  throw e;
}
await page1.locator('#ddlsource').selectOption({ index: 2 });
await page1.getByRole('cell', { name: '2/14/2026 ...', exact: true }).getByRole('button').click();
// Select today's date in the date picker
const todayDay = (new Date()).getDate().toString();
const todayLink = page1.getByRole('link', { name: todayDay });
if (await todayLink.count() > 0) {
  await todayLink.click();
  console.log(`Clicked date picker link for today: ${todayDay}`);
} else {
  // Fallback: click any available day link
  const anyDayLink = page1.getByRole('link').filter({ hasText: /^\d+$/ }).first();
  if (await anyDayLink.count() > 0) {
    await anyDayLink.click();
    console.warn('Today date link not found, clicked first available day link.');
  } else {
    console.warn('No day link found in date picker.');
  }
}
await page1.locator('#ddlestimatetype').selectOption({ index: 2 });
await page1.locator('#ddlsalesperson2_select').click();
await page1.getByRole('link', { name: 'Falcon, John' }).click();
await page1.locator('#ddlPrimaryTarget').selectOption({ index: 2 });
await page1.locator('#txtrenewalfee').click();
await page1.locator('#txtrenewalfee').dblclick();
await page1.locator('#txtrenewalfee').fill('25');
// Select the first available item in a JavaScript-rendered dropdown list for #ddlsourceemployee
await page1.locator('#ddlsourceemployee_select').click();
const dropdownItems = page1.locator('ul.combo-box-list > li, li[role="option"]');
const count = await dropdownItems.count();
let clicked = false;
for (let i = 0; i < count; i++) {
  const item = dropdownItems.nth(i);
  const visible = await item.isVisible().catch(() => false);
  const text = (await item.textContent() || '').trim();
  if (visible && !/none/i.test(text) && text.length > 0) {
    await item.click();
    console.log('Selected:', text);
    clicked = true;
    break;
  }
}
if (!clicked) {
  console.warn('No visible, non-placeholder dropdown item found for #ddlsourceemployee');
}
//await page1.getByRole('link', { name: 'Account, Jimmy Empt' }).click();
await page1.locator('#ddlroute').selectOption({ index: 2 });
await page1.locator('#txtboosterfee').click();
await page1.locator('#txtboosterfee').fill('25');
await page1.locator('#divc40').getByRole('link').filter({ hasText: /^$/ }).click();
// Select tomorrow's date in the date picker
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const tomorrowDay = tomorrow.getDate().toString();
const tomorrowLink = page1.getByRole('link', { name: tomorrowDay });
if (await tomorrowLink.count() > 0) {
  await tomorrowLink.click();
  console.log(`Clicked date picker link for tomorrow: ${tomorrowDay}`);
} else {
  // Fallback: click any available day link
  const anyDayLink = page1.getByRole('link').filter({ hasText: /^\d+$/ }).first();
  if (await anyDayLink.count() > 0) {
    await anyDayLink.click();
    console.warn('Tomorrow date link not found, clicked first available day link.');
  } else {
    console.warn('No day link found in date picker.');
  }
}
await page1.getByRole('button', { name: 'Auto-fill dates' }).click();
await page1.locator('#btnfinish2_295').click();

}

}








////////////////////////////////////////////////////////////////////////////////////////////////////

/*

async openAccount() {

// search from main page and open result popup
// use this.page (class instance) instead of a bare 'page'
await this.openAccountFirstnameInput.click();
await this.openAccountFirstnameInput.fill('Falcon');

await this.openAccountCompanyInput.click();
await this.openAccountCompanyInput.fill('Falcon');
await this.openAccountSearchButton.click();

await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
const page1Promise = this.page.waitForEvent('popup');
await this.page.getByRole('link', { name: '*' }).first().click();
const openAccountPage1 = await page1Promise;

}


*/
////////////////////////////////////////////////////////////////////////////////////////////////////////


async openAccountAddProgram() {


// search from main page and open result popup
await this.openAccountFirstnameInput.click();
await this.openAccountFirstnameInput.fill('Falcon');
await this.openAccountCompanyInput.click();
await this.openAccountCompanyInput.fill('Falcon');
await this.openAccountSearchButton.click();
await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
const page1Promise = this.page.waitForEvent('popup');
await this.page.getByRole('link', { name: '*' }).first().click();
const openAccountPage1 = await page1Promise;

// Open Add Program dialog
const wizardFrame = openAccountPage1.frameLocator('iframe[name="ifrmWizard"]');
await wizardFrame.getByRole('button', { name: 'Site Menu' }).click();
await wizardFrame.getByRole('link', { name: 'Add Program' }).click();

// Open the Select2 dropdown with robust fallback logic
const select2Trigger = openAccountPage1.locator('span.select2-selection.select2-selection--single[aria-labelledby="select2-ddlprogram-container"]');
if (await select2Trigger.count() > 0) {
  try {
    if (await select2Trigger.isVisible()) {
      await select2Trigger.click({ force: true });
    } else {
      // Try to scroll into view and click
      await select2Trigger.scrollIntoViewIfNeeded().catch(() => {});
      if (await select2Trigger.isVisible()) {
        await select2Trigger.click({ force: true });
      } else {
        // Try JS click as a last resort
        const handle = await select2Trigger.elementHandle();
        if (handle) {
          await openAccountPage1.evaluate(el => el.click(), handle);
        } else {
          throw new Error('Select2 trigger element handle not found');
        }
      }
    }
  } catch (e) {
    console.warn('Select2 trigger not clickable, trying combo-box direct input fallback.', e);
    // Try direct text input for combo-box dropdown as fallback
    const comboBoxFilter = openAccountPage1.locator('#ddlprogram_textFilter, input[id*="ddlprogram_textFilter"], input.combo-box-filter');
    if (await comboBoxFilter.count() > 0) {
      await comboBoxFilter.fill('Falcon Auto Test Program Renewal');
      await comboBoxFilter.dblclick();
      await comboBoxFilter.press('ArrowDown');
      await comboBoxFilter.press('Enter');
      await comboBoxFilter.press('Enter');
      await openAccountPage1.waitForTimeout(500);
      // Try to select the first visible option after filtering
      const filteredOption = openAccountPage1.locator('ul.combo-box-list > li, li[role="option"]').filter({ hasText: 'Falcon Auto Test Program Renewal' }).first();
      if (await filteredOption.count() > 0) {
        await filteredOption.click();
        console.log('Selected program via direct text input.');
      } else {
        console.warn('No matching program found after direct text input.');
      }
      // Skip the rest of Select2 logic if fallback is used
      await openAccountPage1.locator('button').filter({ hasText: 'Add Program' }).click();
      return;
    }
  }
}
// Type filter text in the search input if available
const searchInput = openAccountPage1.locator('.select2-container--open input.select2-search__field');
if (await searchInput.count() > 0) {
  await searchInput.fill('Falcon Auto Test Program Renewal');
}

// Wait for the dropdown options to appear and click the <li> with the desired text
const programOption = openAccountPage1.locator('li.select2-results__option').filter({ hasText: 'Falcon Auto Test Program Renewal' }).first();
if (await programOption.count() > 0) {
  await programOption.waitFor({ state: 'visible', timeout: 10000 });
  await programOption.click({ force: true });
  console.log('Clicked <li> with text: Falcon Auto Test Program Renewal');
} else {
  // Log all available options for debug
  const allOptions = await openAccountPage1.locator('li.select2-results__option').allTextContents();
  console.warn('Program option not found. Available options:', allOptions);

  // Try direct text input for combo-box dropdown as fallback
  const comboBoxFilter = openAccountPage1.locator('#ddlprogram_textFilter, input[id*="ddlprogram_textFilter"], input.combo-box-filter');
  if (await comboBoxFilter.count() > 0) {
    await comboBoxFilter.fill('Falcon Auto Test Program Renewal');
    await comboBoxFilter.dblclick();
    await comboBoxFilter.press('ArrowDown');
    await comboBoxFilter.press('Enter');
    await comboBoxFilter.press('Enter');
    await openAccountPage1.waitForTimeout(500);
    // Try to select the first visible option after filtering
    const filteredOption = openAccountPage1.locator('ul.combo-box-list > li, li[role="option"]').filter({ hasText: 'Falcon Auto Test Program Renewal' }).first();
    if (await filteredOption.count() > 0) {
      await filteredOption.click();
      console.log('Selected program via direct text input.');
    } else {
      console.warn('No matching program found after direct text input.');
    }
  }
}
// Continue with Add Program button if needed
await openAccountPage1.locator('button').filter({ hasText: 'Add Program' }).click();

// Define detailsFrame once for all subsequent dropdown logic
const detailsFrame = openAccountPage1.locator('#MainFrameBodyFrame').contentFrame();

await detailsFrame.locator('#ddlestimatetype').selectOption({ index: 2 });

await detailsFrame.locator('#ddlroute_select').click();
await detailsFrame.getByRole('link', { name: 'Falcon Auto route' }).click();
// Click the source dropdown button
const sourceDropdown = detailsFrame.locator('#ddlsource_select');
await sourceDropdown.click();
// Wait for dropdown list to be visible and select the second visible item (index 1)
const trDropdownItems = detailsFrame.locator('tr ul.combo-box-list > li, tr li[role="option"]');
let foundAndClicked = false;
let visibleIndex = 0;
for (let i = 0; i < await trDropdownItems.count(); i++) {
  const option = trDropdownItems.nth(i);
  const visible = await option.isVisible().catch(() => false);
  if (visible) {
    if (visibleIndex === 1) { // second visible item
      await option.click();
      foundAndClicked = true;
      break;
    }
    visibleIndex++;
  }
}
if (!foundAndClicked) {
  console.warn('Second visible source option in <tr> not found.');
}
// Click the source employee dropdown button
const sourceEmployeeDropdown = detailsFrame.locator('#ddlsourceemployee_select');
await sourceEmployeeDropdown.click();
// Wait for dropdown list to be visible and select the second visible item (index 1)
const trEmployeeDropdownItems = detailsFrame.locator('tr ul.combo-box-list > li, tr li[role="option"]');
let foundAndClickedEmployee = false;
let visibleIndexEmployee = 0;
for (let i = 0; i < await trEmployeeDropdownItems.count(); i++) {
  const option = trEmployeeDropdownItems.nth(i);
  const visible = await option.isVisible().catch(() => false);
  if (visible) {
    if (visibleIndexEmployee === 1) { // second visible item
      await option.click();
      foundAndClickedEmployee = true;
      break;
    }
    visibleIndexEmployee++;
  }
}
if (!foundAndClickedEmployee) {
  console.warn('Second visible source employee option in <tr> not found.');
}
// Click the primary target dropdown button
const primaryTargetDropdown = detailsFrame.locator('#ddlPrimaryTarget_select');
await primaryTargetDropdown.click();
// Wait for dropdown list to be visible and select the second visible item (index 1)
const trPrimaryTargetDropdownItems = detailsFrame.locator('tr ul.combo-box-list > li, tr li[role="option"]');
let foundAndClickedPrimaryTarget = false;
let visibleIndexPrimaryTarget = 0;
for (let i = 0; i < await trPrimaryTargetDropdownItems.count(); i++) {
  const option = trPrimaryTargetDropdownItems.nth(i);
  const visible = await option.isVisible().catch(() => false);
  if (visible) {
    if (visibleIndexPrimaryTarget === 1) { // second visible item
      await option.click();
      foundAndClickedPrimaryTarget = true;
      break;
    }
    visibleIndexPrimaryTarget++;
  }
}
if (!foundAndClickedPrimaryTarget) {
  console.warn('Second visible primary target option in <tr> not found.');
}
    // Click salesperson dropdown
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#ddlsalesperson2_select').click();
    // Select and click the second visible item in the dropdown list
    const salespersonDropdownItems = openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('tr ul.combo-box-list > li, tr li[role="option"]');
    let foundAndClickedSalesperson = false;
    let visibleIndexSalesperson = 0;
    for (let i = 0; i < await salespersonDropdownItems.count(); i++) {
      const option = salespersonDropdownItems.nth(i);
      const visible = await option.isVisible().catch(() => false);
      if (visible) {
        if (visibleIndexSalesperson === 1) { // second visible item
          await option.click();
          foundAndClickedSalesperson = true;
          break;
        }
        visibleIndexSalesperson++;
      }
    }
    if (!foundAndClickedSalesperson) {
      console.warn('Second visible salesperson option in <tr> not found.');
    }
await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#txtrenewalfee').click();
await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#txtrenewalfee').click();
await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#txtrenewalfee').fill('25');
await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#txtboosterfee').click();
await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#txtboosterfee').fill('25');
  // Click calendar icon
  await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('.col-xs-12 > div > div > .input-group > .input-group-addon').click();
  // Select tomorrow's date dynamically
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowDay = tomorrow.getDate().toString();
  const tomorrowLink = openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().getByRole('link', { name: tomorrowDay });
  if (await tomorrowLink.count() > 0) {
    await tomorrowLink.click();
    console.log(`Clicked date picker link for tomorrow: ${tomorrowDay}`);
  } else {
    // Fallback: click any available day link
    const anyDayLink = openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().getByRole('link').filter({ hasText: /^\d+$/ }).first();
    if (await anyDayLink.count() > 0) {
      await anyDayLink.click();
      console.warn('Tomorrow date link not found, clicked first available day link.');
    } else {
      console.warn('No day link found in date picker.');
    }
  }
await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().getByRole('button', { name: 'Auto-fill dates' }).click();
await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().getByRole('button', { name: 'Finish' }).click();


}

}



