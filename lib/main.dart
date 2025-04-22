
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:duo_ride_connect/theme/theme_provider.dart';
import 'package:duo_ride_connect/pages/home_page.dart';
import 'package:provider/provider.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final prefs = await SharedPreferences.getInstance();
  final isDark = prefs.getBool('isDark') ?? false;
  
  runApp(
    ChangeNotifierProvider(
      create: (_) => ThemeProvider(isDark),
      child: const DuoApp(),
    ),
  );
}

class DuoApp extends StatelessWidget {
  const DuoApp({super.key});

  @override
  Widget build(BuildContext context) {
    final themeProvider = Provider.of<ThemeProvider>(context);
    
    return MaterialApp(
      title: 'DUO: Ride-Sharing Revolution',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.light,
        primaryColor: const Color(0xFF8B5CF6),
        scaffoldBackgroundColor: const Color(0xFFFDF6F3),
        colorScheme: ColorScheme.light(
          primary: const Color(0xFF8B5CF6),
          secondary: const Color(0xFF7E69AB),
          tertiary: const Color(0xFFFFA99F),
          background: const Color(0xFFFDF6F3),
        ),
        fontFamily: 'Poppins',
        textTheme: const TextTheme(
          displayLarge: TextStyle(
            fontSize: 32,
            fontWeight: FontWeight.bold,
            color: Color(0xFF222222),
          ),
          bodyLarge: TextStyle(
            fontSize: 16,
            color: Color(0xFF222222),
          ),
        ),
      ),
      darkTheme: ThemeData(
        brightness: Brightness.dark,
        primaryColor: const Color(0xFF8B5CF6),
        scaffoldBackgroundColor: const Color(0xFF1E293B),
        colorScheme: ColorScheme.dark(
          primary: const Color(0xFF8B5CF6),
          secondary: const Color(0xFF7E69AB),
          tertiary: const Color(0xFFFFA99F),
          background: const Color(0xFF1E293B),
          surface: const Color(0xFF334155),
        ),
        fontFamily: 'Poppins',
        textTheme: const TextTheme(
          displayLarge: TextStyle(
            fontSize: 32,
            fontWeight: FontWeight.bold,
            color: Color(0xFFE2E8F0),
          ),
          bodyLarge: TextStyle(
            fontSize: 16,
            color: Color(0xFFE2E8F0),
          ),
        ),
      ),
      themeMode: themeProvider.isDark ? ThemeMode.dark : ThemeMode.light,
      home: const HomePage(),
    );
  }
}
