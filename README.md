# HRMS App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). The app is built to manage employee data and includes a multi-step form with various validations and dynamic features.

## App Setup

1. **Clone the repository** : Clone the repository from the GitHub link to your local machine or code editor.

   `Clone the Repo: git clone <repository-url`
2. **Install dependencies** : Run the following command to install all the dependencies:

```bash
   npm install
```

1. **Start the development server** : After the dependencies are installed, run the following command to start the app:

```bash
   npm run dev
```

1. Open [http://localhost:3000](http://localhost:3000/) in your browser to view the HRMS landing page (currently under development).
2. Navigate to the "All Employees Page" from the sidebar to explore the functionality, as the main work is located there.

---

## Project Information and Implementations

* **Routing** : The app uses the app router for routing in the Next.js application.
* **State Management** : Redux Toolkit is used for state management. Local storage is also utilized to persist form data.
* **Form Management** : React Hook Form is used to handle form submissions and validation.
* **Validation** : Yup Schema is used for form validation, providing clear and dynamic error messages. A centralized file for Yup Schema and error messages is included for easy integration.
* **Persistence** : The app persists form data even if the user closes the tab or the browser, thanks to Local Storage.
* **UI/Design** : The design is based on the Figma design, which can be viewed [here](https://www.figma.com/design/njhjnm2OCZ5NtMJh6Due8x/HR-Management-Admin---UI-Kit-(Community)?node-id=113-7674&p=f&t=rFQVNUOkDuWNwqfg-0).
* **Database** : Database queries are set up and can be found in the `src/lib/dbSetup.txt` file. Note that while the database/API is integrated into the app, it's not currently in use; dropdowns and form submissions are simulated asynchronously for now.

---

### Key Features:

* **Multi-Step Navigation** : Clear progression with "Next" and "Previous" buttons, including a final review step.
* **Dynamic Inputs** : Add or remove fields dynamically, such as multiple addresses.
* **Complex Validations** : Includes custom, conditional, and async validations like email format, password strength, and username availability.
* **Async Operations** : Simulated API calls for asynchronous data loading and validation (e.g., country selection triggers state loading, username availability check).
* **LocalStorage Persistence** : Saves form data locally, ensuring the data is preserved if the user closes or refreshes the page.
* **Conditional Logic** : Certain fields (like payment info) are shown only based on user selections, such as selecting a "Premium" subscription.
* **Error Handling** : Dynamic error styling with clear inline validation messages and error class changes.

## Overview

The goal of this project is to create a multi-step form application that simulates a real-world HR management system (HRMS). The application handles various input types, performs dynamic form operations, and ensures complex validations are met at each stage.

The app includes multiple steps, such as personal information, address details, account settings, additional information, and a review page. Each step validates the input fields and provides immediate feedback to the user.

### Assignment Requirements

1. **Project Setup** :

* Initialize a React app (using Create React App or another boilerplate).
* Use functional components and React hooks (`useState`, `useEffect`) to manage form state.
* Add dynamic error classes to highlight input validation states using CSS (or CSS-in-JS solutions).

1. **Form Steps and Fields** :

* **Step 1: Personal Information**
  * First Name & Last Name (Text input) – required.
  * Email (Email input) – required, valid email format.
  * Phone Number (Number or text input) – required, must match a specific pattern (using custom regex).
  * Date of Birth (Date picker) – required, user must be at least 18 years old.
  * **Validations** : Ensure all fields are filled, email is valid, phone number matches the pattern, and the user is 18+ years old.
* **Step 2: Address Information**
  * Allow users to add or remove multiple addresses.
  * For each address:
    * Address Line 1 & Address Line 2 (Text inputs) – required for Address Line 1.
    * City (Text input) – required.
    * Country (Select dropdown) – required.
    * State/Province (Select dropdown) – required.
    * ZIP/Postal Code (Text/number input) – required, will validate later when the data will be fetched from db.
  * **Dynamic Logic** : Loading state/province options asynchronously when a country is selected (simulated API call).
  * **Validations** : Each address must be validated, including ZIP code validation based on country format.
* **Step 3: Account Details**
  * Username (Text input) – required.
  * Async Validation: Check the username against a simulated API for availability.
  * Password (Password input) – required, must meet complex criteria (uppercase, lowercase, number, special character).
  * Confirm Password (Password input) – required, must match the password.
  * Security Question (Select dropdown) – required.
  * Security Answer (Text input) – required.
  * **Validations** : Password must meet the required strength, username must be unique, display error messages dynamically.
* **Step 4: Additional Information & Conditional Sections**
  * Profile Picture (File upload) – optional, validate image format and size.
  * Bio (Textarea) – optional, character limit.
  * Preferences (Checkbox group) – e.g., newsletters, notifications.
  * Subscription Plan (Radio buttons) – Free, Standard, Premium.
  * **Conditional Logic** : If "Premium" is selected, show additional payment fields:
  * Credit Card Number (Text input) – validate format.
  * Expiration Date (Date input) – validate future date.
  * CVV (Number input) – validate 3 or 4 digit format.
  * Referral Code (Text input) – show if the user checks "I have a referral code" checkbox.
  * **Validations** : Profile picture file type and size, conditional validations for payment info if "Premium" is selected.
* **Step 5: Review & Submit**
  * Review Page: Display all entered data in a summary form.
  * Allow navigation back to edit any step.
  * Final Submission: Simulate sending the data to a server (asynchronous call using fetch/axios).

1. **Dynamic & Advanced Scenarios** :

* **Asynchronous Data Loading** : Load dropdown options (e.g., states/provinces) asynchronously based on user selections.
* **Debounced Validations** : Implement debounced validations for fields like the username to avoid unnecessary API calls.
* **Dynamic Error Styling** : Apply CSS classes dynamically to show error states (red borders) or valid states (green borders or checkmarks).
* **Persist Form Data** : Save user progress in local storage, so data persists even if the user leaves the page and returns later.
* **Responsive Navigation** : Ensure the "Next" button is only enabled when all required fields in the current step are valid.

