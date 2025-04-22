
import 'package:flutter/material.dart';

class MitreSection extends StatelessWidget {
  const MitreSection({super.key});

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
            'assets/images/taxi_3d.png',
            height: 180,
          ),
        ),
        const SizedBox(height: 24),
        Text(
          'Mitre Rides by Auto',
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: const Color(0xFFFFD600),
            shadows: [
              Shadow(
                color: Colors.black.withOpacity(0.2),
                offset: const Offset(0, 2),
                blurRadius: 4,
              ),
            ],
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 16),
        Text(
          'Experience budget-friendly and comfortable auto rides around your city.\nWhy pay more? Our Mitre Rides by Auto offer fixed fares, friendly drivers, and transparent trips!',
          style: TextStyle(
            fontSize: 16,
            color: isDark ? Colors.amber.shade100 : const Color(0xFF7C4D03),
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 32),
        _buildMitreFeatures(context),
      ],
    );
  }
  
  Widget _buildMitreFeatures(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final isMobile = size.width < 768;
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: Column(
        children: [
          Row(
            children: [
              Expanded(
                child: _buildFeatureCard(
                  context,
                  '₹15/km',
                  'Best City Rate',
                  const Color(0xFFFFD600),
                ),
              ),
              const SizedBox(width: 16),
              Expanded(
                child: _buildFeatureCard(
                  context,
                  '4.9★',
                  'Trusted Drivers',
                  const Color(0xFFFFD600),
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          _buildFeatureCard(
            context,
            'Call/Book Instantly',
            'No Surge Pricing',
            const Color(0xFFFFAB00),
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
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: isDark 
          ? color.withOpacity(0.1) 
          : color.withOpacity(0.15),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(
          color: color.withOpacity(isDark ? 0.2 : 0.4),
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
              color: isDark ? color.withOpacity(0.9) : color.withAlpha(200),
            ),
          ),
          const SizedBox(height: 8),
          Text(
            subtitle,
            textAlign: TextAlign.center,
            style: TextStyle(
              color: isDark ? Colors.amber.shade100 : const Color(0xFFB36A09),
              fontWeight: FontWeight.w500,
              fontSize: 14,
            ),
          ),
        ],
      ),
    );
  }
}
