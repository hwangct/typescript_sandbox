import javax.naming.*;
import javax.naming.directory.*;

import java.util.Hashtable;

/**
 * Demonstrates how failure to supply an appropriate authentication mechanism
 * results in a failure to create an initial context
 *
 * usage: java BadAuth
 */
class BadAuth {
    public static void main(String[] args) {

        // Set up environment for creating initial context
        final String ldapAdServer = "ldap://chdc1.techma.com:389";
        final String ldapSearchBase = "dc=techma,dc=com";

        final String ldapUsername = "cth";
        final String ldapPassword = "DarthVader2018!";

        final String ldapAccountToLookup = "wsm";

        Hashtable<String, Object> env = new Hashtable<String, Object>();
        env.put(Context.SECURITY_AUTHENTICATION, "simple");
        if (ldapUsername != null) {
            env.put(Context.SECURITY_PRINCIPAL, ldapUsername);
        }
        if (ldapPassword != null) {
            env.put(Context.SECURITY_CREDENTIALS, ldapPassword);
        }
        env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
        env.put(Context.PROVIDER_URL, ldapAdServer);
        env.put("java.naming.ldap.attributes.binary", "objectSID");

        try {
            // Create initial context
            DirContext ctx = new InitialDirContext();

            //System.out.println(ctx.lookup("cn=DL Employees"));

            // do something useful with ctx

            // Close the context when we're done
            ctx.close();
        } catch (NamingException e) {
            e.printStackTrace();
        }
    }
}