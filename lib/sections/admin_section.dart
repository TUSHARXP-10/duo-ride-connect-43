
import 'package:flutter/material.dart';

class AdminSection extends StatelessWidget {
  const AdminSection({super.key});

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
          child: Icon(
            Icons.admin_panel_settings,
            size: 60,
            color: const Color(0xFF0EA5E9),
          ),
        ),
        const SizedBox(height: 24),
        Text(
          'Duo Admin & Analytics',
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: const Color(0xFF0EA5E9),
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 16),
        Text(
          'Duo gives you full control: manage users, trips, KYC, stats, support, and payouts.\nYour rides. Your data. Your safety—always.',
          style: TextStyle(
            fontSize: 16,
            color: isDark ? Colors.grey.shade300 : Colors.grey.shade700,
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 32),
        _buildAdminStats(context),
        const SizedBox(height: 48),
        _buildAdminActions(context),
      ],
    );
  }
  
  Widget _buildAdminStats(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final isMobile = size.width < 768;
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: isMobile
          ? Column(
              children: [
                _buildStatCard(
                  context,
                  '27,153',
                  'trips completed',
                  'and growing daily',
                  Icons.map,
                  const Color(0xFF7E69AB),
                ),
                const SizedBox(height: 16),
                _buildStatCard(
                  context,
                  '8,837',
                  'registered users',
                  'join the Duo ride',
                  Icons.people,
                  const Color(0xFFF97316),
                ),
              ],
            )
          : Row(
              children: [
                Expanded(
                  child: _buildStatCard(
                    context,
                    '27,153',
                    'trips completed',
                    'and growing daily',
                    Icons.map,
                    const Color(0xFF7E69AB),
                  ),
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: _buildStatCard(
                    context,
                    '8,837',
                    'registered users',
                    'join the Duo ride',
                    Icons.people,
                    const Color(0xFFF97316),
                  ),
                ),
              ],
            ),
    );
  }
  
  Widget _buildStatCard(
    BuildContext context,
    String number,
    String title,
    String subtitle,
    IconData icon,
    Color color,
  ) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: isDark 
          ? Colors.black.withOpacity(0.2) 
          : Colors.white.withOpacity(0.6),
        borderRadius: BorderRadius.circular(16),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.05),
            blurRadius: 10,
            spreadRadius: 0,
          ),
        ],
        border: Border.all(
          color: isDark 
            ? Colors.white.withOpacity(0.1) 
            : Colors.grey.shade100,
        ),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(
                icon,
                size: 18,
                color: color,
              ),
              const SizedBox(width: 8),
              Text(
                '$number $title',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: color,
                ),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Text(
            subtitle,
            style: TextStyle(
              color: color,
              fontSize: 14,
            ),
          ),
        ],
      ),
    );
  }
  
  Widget _buildAdminActions(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final isMobile = size.width < 768;
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    final actionItems = [
      {'title': 'User Management', 'icon': Icons.people_alt},
      {'title': 'KYC Verification', 'icon': Icons.verified_user},
      {'title': 'Trip History', 'icon': Icons.history},
      {'title': 'Payment Reports', 'icon': Icons.payments},
      {'title': 'Support Tickets', 'icon': Icons.support_agent},
      {'title': 'System Settings', 'icon': Icons.settings},
    ];
    
    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: isMobile ? 2 : 3,
        crossAxisSpacing: 16,
        mainAxisSpacing: 16,
        childAspectRatio: 1.5,
      ),
      itemCount: actionItems.length,
      padding: const EdgeInsets.symmetric(horizontal: 16),
      itemBuilder: (context, index) {
        return _buildActionCard(
          context,
          actionItems[index]['title'] as String,
          actionItems[index]['icon'] as IconData,
        );
      },
    );
  }
  
  Widget _buildActionCard(
    BuildContext context,
    String title,
    IconData icon,
  ) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    
    return Container(
      padding: const EdgeInsets.all(16),
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
            size: 32,
            color: const Color(0xFF0EA5E9),
          ),
          const SizedBox(height: 12),
          Text(
            title,
            style: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.bold,
              color: isDark ? Colors.white : Colors.black87,
            ),
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }
}
