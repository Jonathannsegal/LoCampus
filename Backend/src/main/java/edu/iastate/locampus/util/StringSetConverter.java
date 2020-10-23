package edu.iastate.locampus.util;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

@Converter
public class StringSetConverter implements AttributeConverter<Set<String>, String> {

    @Override
    public String convertToDatabaseColumn(Set<String> strings) {
        if (strings == null) {
            return "";
        }

        String result = "";

        for (String string : strings) {
            result += string + ".";
        }

        if (result.length() > 0 && result.charAt(result.length() - 1) == '.') {
            result = result.substring(0, result.length() - 1);
        }

        return result;
    }

    @Override
    public Set<String> convertToEntityAttribute(String s) {
        String[] strings = s.split(".");
        Set<String> result = new HashSet<>();
        Collections.addAll(result, strings);
        return result;
    }
}