
import 'package:flutter/material.dart';
import 'package:duo_ride_connect/widgets/side_navigation.dart';
import 'package:duo_ride_connect/widgets/theme_toggle.dart';
import 'package:duo_ride_connect/sections/welcome_section.dart';
import 'package:duo_ride_connect/sections/register_section.dart';
import 'package:duo_ride_connect/sections/book_section.dart';
import 'package:duo_ride_connect/sections/mitre_section.dart';
import 'package:duo_ride_connect/sections/wallet_section.dart';
import 'package:duo_ride_connect/sections/admin_section.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _selectedIndex = 0;
  final PageController _pageController = PageController();
  late final ScrollController _scrollController;

  @override
  void initState() {
    super.initState();
    _scrollController = ScrollController();
  }

  @override
  void dispose() {
    _pageController.dispose();
    _scrollController.dispose();
    super.dispose();
  }

  void _onItemSelected(int index) {
    setState(() {
      _selectedIndex = index;
    });
    _pageController.animateToPage(
      index,
      duration: const Duration(milliseconds: 300),
      curve: Curves.easeInOut,
    );
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final isMobile = size.width < 768;
    
    return Scaffold(
      appBar: isMobile ? AppBar(
        backgroundColor: Theme.of(context).scaffoldBackgroundColor,
        title: const Text(
          'DUO',
          style: TextStyle(
            color: Color(0xFF8B5CF6),
            fontWeight: FontWeight.bold,
          ),
        ),
        actions: const [ThemeToggle()],
      ) : null,
      drawer: isMobile ? Drawer(
        child: SideNavigation(
          selectedIndex: _selectedIndex,
          onItemSelected: (index) {
            _onItemSelected(index);
            Navigator.pop(context);
          },
        ),
      ) : null,
      body: Row(
        children: [
          if (!isMobile) 
            SideNavigation(
              selectedIndex: _selectedIndex,
              onItemSelected: _onItemSelected,
            ),
          Expanded(
            child: PageView(
              controller: _pageController,
              physics: const NeverScrollableScrollPhysics(),
              onPageChanged: (index) {
                setState(() {
                  _selectedIndex = index;
                });
              },
              children: const [
                WelcomeSection(),
                RegisterSection(),
                BookSection(),
                MitreSection(),
                WalletSection(),
                AdminSection(),
              ],
            ),
          ),
        ],
      ),
      floatingActionButton: isMobile ? FloatingActionButton(
        backgroundColor: const Color(0xFF8B5CF6),
        onPressed: () {
          _onItemSelected((_selectedIndex + 1) % 6);
        },
        child: const Icon(Icons.arrow_forward, color: Colors.white),
      ) : null,
    );
  }
}
