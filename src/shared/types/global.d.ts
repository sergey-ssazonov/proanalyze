// global.d.ts
declare global {
  interface YooMoneyCheckoutWidgetOptions {
    confirmation_token: string;
    return_url: string;
    error_callback: (error: Error) => void;
  }

  interface YooMoneyCheckoutWidget {
    new (options: YooMoneyCheckoutWidgetOptions): {
      render: (elementId: string) => void;
      on: (event: string, callback: () => void) => void;
      destroy: () => void;
    };
  }

  interface Window {
    YooMoneyCheckoutWidget?: YooMoneyCheckoutWidget;
  }
}

export {};
