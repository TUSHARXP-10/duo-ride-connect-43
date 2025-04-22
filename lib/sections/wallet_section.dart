
import 'package:flutter/material.dart';

class WalletSection extends StatelessWidget {
  const WalletSection({super.key});

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    
    return ListView(
      padding: EdgeInsets.symmetric(
        vertical: 40,
        horizontal: size.width < 768 ? 20 : 40,
      ),
      children: [
        Center(
          child: Image.asset(
            'assets/images/car_3d.png',
            height: 180,
          ),
        ),
        const SizedBox(height: 24),
        Text(
          'Secure Wallet & Instant Pay',
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: const Color(0xFFFF719A),
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 16),
        Text(
          'Pay with UPI or in-app Duo Wallet via Razorpay/Paytm.\nDrivers track earnings, payouts, and 2% Duo commission in real time.',
          style: TextStyle(
            fontSize: 16,
            color: isDark ? Colors.grey.shade300 : Colors.grey.shade700,
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 32),
        _buildWalletFeatures(context),
      ],
    );
  }
  
  Widget _buildWalletFeatures(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final isMobile = size.width < 768;
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: isMobile
          ? Column(
              children: [
                _buildFeatureCard(
                  context,
                  '2%',
                  'Commission only', 
                  const Color(0xFFF97316),
                ),
                const SizedBox(height: 16),
                _buildFeatureCard(
                  context,
                  '₹1950',
                  'Avg. monthly earning', 
                  const Color(0xFF8B5CF6),
                ),
                const SizedBox(height: 16),
                _buildFeatureCard(
                  context,
                  'UPI, Paytm, Wallet',
                  'Payout options', 
                  const Color(0xFF0EA5E9),
                ),
              ],
            )
          : Row(
              children: [
                Expanded(
                  child: _buildFeatureCard(
                    context,
                    '2%',
                    'Commission only', 
                    const Color(0xFFF97316),
                  ),
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: _buildFeatureCard(
                    context,
                    '₹1950',
                    'Avg. monthly earning', 
                    const Color(0xFF8B5CF6),
                  ),
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: _buildFeatureCard(
                    context,
                    'UPI, Paytm, Wallet',
                    'Payout options', 
                    const Color(0xFF0EA5E9),
                  ),
                ),
              ],
            ),
    );
  }
  
  Widget _buildFeatureCard(
    BuildContext context,
    String title,
    String subtitle,
    Color color,
  ) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: isDark ? Colors.black12 : Colors.white,
        borderRadius: BorderRadius.circular(16),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.05),
            blurRadius: 10,
            spreadRadius: 0,
          ),
        ],
        border: Border.all(
          color: isDark ? Colors.white.withOpacity(0.1) : Colors.grey.shade100,
        ),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            title,
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.bold,
              color: color,
            ),
          ),
          const SizedBox(height: 8),
          Text(
            subtitle,
            textAlign: TextAlign.center,
            style: TextStyle(
              color: isDark ? Colors.grey.shade300 : Colors.grey.shade600,
              fontSize: 14,
            ),
          ),
        ],
      ),
    );
  }
}
