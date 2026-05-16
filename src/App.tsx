/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Layout from "./components/Layout";
// @ts-ignore - Virtual module provided by vite-plugin-pwa
import { useRegisterSW } from 'virtual:pwa-register/react';

export default function App() {
  useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered');
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    }
  });

  return (
    <div className="antialiased text-slate-900 bg-white min-h-screen selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      <Layout />
    </div>
  );
}
