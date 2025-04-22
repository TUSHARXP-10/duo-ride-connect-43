
import 'package:flutter/material.dart';
import 'package:duo_ride_connect/theme/theme_provider.dart';
import 'package:duo_ride_connect/widgets/theme_toggle.dart';
import 'package:provider/provider.dart';

class SideNavigation extends StatelessWidget {
  final int selectedIndex;
  final Function(int) onItemSelected;
  
  const SideNavigation({
    super.key,
    required this.selectedIndex,
    required this.onItemSelected,
  });

  @override
  Widget build(BuildContext context) {
    final themeProvider = Provider.of<ThemeProvider>(context);
    final isDark = themeProvider.isDark;
    
    return Container(
      width: 250,
      color: isDark ? const Color(0xFF0F172A) : Colors.white,
      child: Column(
        children: [
          const SizedBox(height: 40),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Row(
              children: [
                Text(
                  'DUO',
                  style: TextStyle(
                    fontSize: 28,
                    fontWeight: FontWeight.bold,
                    color: const Color(0xFF8B5CF6),
                  ),
                ),
                const Spacer(),
                const ThemeToggle(),
              ],
            ),
          ),
          const SizedBox(height: 40),
          _buildNavItem(context, 0, 'Welcome', Icons.home_rounded),
          _buildNavItem(context, 1, 'Register', Icons.app_registration_rounded),
          _buildNavItem(context, 2, 'Book', Icons.directions_car_rounded),
          _buildNavItem(context, 3, 'Mitre', Icons.local_taxi_rounded),
          _buildNavItem(context, 4, 'Wallet', Icons.account_balance_wallet_rounded),
          _buildNavItem(context, 5, 'Admin', Icons.admin_panel_settings_rounded),
          const Spacer(),
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 16, vertical: 24),
            child: Text(
              '© 2025 Duo · Built for India',
              style: TextStyle(
                fontSize: 12,
                color: Colors.grey,
              ),
            ),
          ),
        ],
      ),
    );
  }
  
  Widget _buildNavItem(BuildContext context, int index, String title, IconData icon) {
    final isSelected = selectedIndex == index;
    final isDark = Provider.of<ThemeProvider>(context).isDark;
    
    return GestureDetector(
      onTap: () => onItemSelected(index),
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
        decoration: BoxDecoration(
          color: isSelected 
            ? const Color(0xFF8B5CF6)
            : Colors.transparent,
          borderRadius: BorderRadius.circular(12),
        ),
        child: Row(
          children: [
            Icon(
              icon,
              color: isSelected 
                ? Colors.white 
                : (isDark ? Colors.grey.shade300 : Colors.grey.shade700),
              size: 20,
            ),
            const SizedBox(width: 12),
            Text(
              title,
              style: TextStyle(
                fontSize: 16,
                fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
                color: isSelected 
                  ? Colors.white 
                  : (isDark ? Colors.grey.shade300 : Colors.grey.shade700),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
