
import 'package:flutter/material.dart';

class WelcomeSection extends StatelessWidget {
  const WelcomeSection({super.key});

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final theme = Theme.of(context);
    
    return ListView(
      padding: EdgeInsets.symmetric(
        vertical: 40,
        horizontal: size.width < 768 ? 20 : 40,
      ),
      children: [
        Center(
          child: Image.asset(
            'assets/images/hero_3d.png',
            height: 200,
          ),
        ),
        const SizedBox(height: 24),
        Center(
          child: ShaderMask(
            shaderCallback: (Rect bounds) {
              return const LinearGradient(
                colors: [Color(0xFF8B5CF6), Color(0xFF7E69AB)],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ).createShader(bounds);
            },
            child: Text(
              'DUO: India\'s Ride-Sharing Revolution',
              style: theme.textTheme.displayLarge?.copyWith(
                fontSize: size.width < 768 ? 28 : 32,
              ),
              textAlign: TextAlign.center,
            ),
          ),
        ),
        const SizedBox(height: 16),
        Center(
          child: Container(
            constraints: const BoxConstraints(maxWidth: 600),
            child: Text(
              'Affordable, sustainable, and social rides for everyone. Bike, scooter, or car—get there together.',
              style: theme.textTheme.bodyLarge,
              textAlign: TextAlign.center,
            ),
          ),
        ),
        const SizedBox(height: 32),
        Center(
          child: ElevatedButton(
            onPressed: () {},
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFF8B5CF6),
              foregroundColor: Colors.white,
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12),
              ),
            ),
            child: const Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  'Get Started',
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(width: 8),
                Icon(Icons.arrow_downward),
              ],
            ),
          ),
        ),
        const SizedBox(height: 40),
        _buildFeatureGrid(context),
      ],
    );
  }
  
  Widget _buildFeatureGrid(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final isMobile = size.width < 768;
    
    return GridView.count(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      crossAxisCount: isMobile ? 1 : 3,
      crossAxisSpacing: 16,
      mainAxisSpacing: 16,
      childAspectRatio: isMobile ? 2 : 1.2,
      padding: const EdgeInsets.symmetric(horizontal: 16),
      children: [
        _buildFeatureCard(
          context,
          'Affordable',
          'Pay ₹20-₹25/km — way cheaper than autos',
          Icons.savings,
        ),
        _buildFeatureCard(
          context,
          'Sustainable',
          'Reduce emissions with shared rides',
          Icons.eco,
        ),
        _buildFeatureCard(
          context,
          'Social',
          'Meet new people during your journeys',
          Icons.people,
        ),
      ],
    );
  }
  
  Widget _buildFeatureCard(
    BuildContext context,
    String title,
    String description,
    IconData icon,
  ) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    
    return Container(
      padding: const EdgeInsets.all(24),
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
          Icon(
            icon,
            size: 40,
            color: const Color(0xFF8B5CF6),
          ),
          const SizedBox(height: 16),
          Text(
            title,
            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
              color: isDark ? Colors.white : Colors.black87,
            ),
          ),
          const SizedBox(height: 8),
          Text(
            description,
            textAlign: TextAlign.center,
            style: TextStyle(
              color: isDark ? Colors.grey.shade300 : Colors.grey.shade700,
            ),
          ),
        ],
      ),
    );
  }
}
