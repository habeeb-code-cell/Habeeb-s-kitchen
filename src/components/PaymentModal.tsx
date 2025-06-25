import React, { useState } from 'react';
import { X, CreditCard, Smartphone, Building, Shield } from 'lucide-react';
import { formatPrice, validateNigerianPhone } from '../utils/formatters';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  onPaymentSuccess: (paymentMethod: string) => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, total, onPaymentSuccess }) => {
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'bank' | 'ussd' | 'wallet'>('card');
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    accountNumber: '',
    bankCode: '',
    phoneNumber: '',
    ussdCode: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const nigerianBanks = [
    { code: '044', name: 'Access Bank' },
    { code: '014', name: 'Afribank' },
    { code: '023', name: 'Citibank' },
    { code: '050', name: 'Ecobank' },
    { code: '011', name: 'First Bank' },
    { code: '058', name: 'GTBank' },
    { code: '030', name: 'Heritage Bank' },
    { code: '082', name: 'Keystone Bank' },
    { code: '214', name: 'FCMB' },
    { code: '221', name: 'Stanbic IBTC' },
    { code: '068', name: 'Standard Chartered' },
    { code: '232', name: 'Sterling Bank' },
    { code: '033', name: 'UBA' },
    { code: '032', name: 'Union Bank' },
    { code: '035', name: 'Wema Bank' },
    { code: '057', name: 'Zenith Bank' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess(selectedMethod === 'card' ? 'Card Payment' : 
                      selectedMethod === 'bank' ? 'Bank Transfer' :
                      selectedMethod === 'ussd' ? 'USSD Payment' : 'Mobile Wallet');
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-90vh overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Payment</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-lg font-bold text-green-800">Total: {formatPrice(total)}</p>
              <p className="text-sm text-green-600">Including delivery charges</p>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-3">Select Payment Method</h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setSelectedMethod('card')}
                className={`p-3 border-2 rounded-lg flex flex-col items-center space-y-2 transition-colors ${
                  selectedMethod === 'card' 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <CreditCard className="w-6 h-6" />
                <span className="text-sm font-medium">Card</span>
              </button>

              <button
                onClick={() => setSelectedMethod('bank')}
                className={`p-3 border-2 rounded-lg flex flex-col items-center space-y-2 transition-colors ${
                  selectedMethod === 'bank' 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Building className="w-6 h-6" />
                <span className="text-sm font-medium">Bank Transfer</span>
              </button>

              <button
                onClick={() => setSelectedMethod('ussd')}
                className={`p-3 border-2 rounded-lg flex flex-col items-center space-y-2 transition-colors ${
                  selectedMethod === 'ussd' 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Smartphone className="w-6 h-6" />
                <span className="text-sm font-medium">USSD</span>
              </button>

              <button
                onClick={() => setSelectedMethod('wallet')}
                className={`p-3 border-2 rounded-lg flex flex-col items-center space-y-2 transition-colors ${
                  selectedMethod === 'wallet' 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Shield className="w-6 h-6" />
                <span className="text-sm font-medium">Mobile Wallet</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {selectedMethod === 'card' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={paymentData.cardNumber}
                    onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      value={paymentData.expiryDate}
                      onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})}
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={paymentData.cvv}
                      onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                      placeholder="123"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {selectedMethod === 'bank' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Bank
                  </label>
                  <select
                    value={paymentData.bankCode}
                    onChange={(e) => setPaymentData({...paymentData, bankCode: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="">Choose your bank</option>
                    {nigerianBanks.map(bank => (
                      <option key={bank.code} value={bank.code}>{bank.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Account Number
                  </label>
                  <input
                    type="text"
                    value={paymentData.accountNumber}
                    onChange={(e) => setPaymentData({...paymentData, accountNumber: e.target.value})}
                    placeholder="1234567890"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            )}

            {selectedMethod === 'ussd' && (
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">USSD Payment Instructions</h4>
                  <p className="text-sm text-blue-700">
                    Dial <strong>*737*{total}*HK123#</strong> to complete your payment
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={paymentData.phoneNumber}
                    onChange={(e) => setPaymentData({...paymentData, phoneNumber: e.target.value})}
                    placeholder="+234 801 234 5678"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            )}

            {selectedMethod === 'wallet' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={paymentData.phoneNumber}
                    onChange={(e) => setPaymentData({...paymentData, phoneNumber: e.target.value})}
                    placeholder="+234 801 234 5678"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Supports OPay, PalmPay, Kuda, and other mobile wallets
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 space-y-3">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                {isProcessing ? 'Processing...' : `Pay ${formatPrice(total)}`}
              </button>
              
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                <Shield className="w-4 h-4" />
                <span>Your payment is secured with 256-bit SSL encryption</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;