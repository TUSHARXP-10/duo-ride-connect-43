
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:duo_ride_connect/theme/theme_provider.dart';

class ThemeToggle extends StatelessWidget {
  const ThemeToggle({super.key});

  @override
  Widget build(BuildContext context) {
    final themeProvider = Provider.of<ThemeProvider>(context);
    
    return GestureDetector(
      onTap: () {
        themeProvider.toggleTheme();
      },
      child: Container(
        width: 40,
        height: 40,
        decoration: BoxDecoration(
          color: themeProvider.isDark 
            ? Colors.grey.shade800.withOpacity(0.3)
            : Colors.white.withOpacity(0.3),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(
            color: themeProvider.isDark 
              ? Colors.white.withOpacity(0.1)
              : Colors.black.withOpacity(0.05),
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.1),
              blurRadius: 10,
              spreadRadius: 0,
            ),
          ],
        ),
        child: Center(
          child: AnimatedSwitcher(
            duration: const Duration(milliseconds: 300),
            child: themeProvider.isDark
                ? const Icon(Icons.dark_mode, color: Colors.white)
                : const Icon(Icons.light_mode, color: Color(0xFFFFD700)),
          ),
        ),
      ),
    );
  }
}
