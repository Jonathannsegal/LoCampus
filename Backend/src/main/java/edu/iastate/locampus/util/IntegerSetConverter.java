package edu.iastate.locampus.util;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.HashSet;
import java.util.Set;

@Converter
public class IntegerSetConverter implements AttributeConverter<Set<Integer>, String> {

    @Override
    public String convertToDatabaseColumn(Set<Integer> integers) {
        String result = "";

        for (Integer integer : integers) {
            result += integer.toString() + ".";
        }

        if (result.length() > 0 && result.charAt(result.length() - 1) == '.') {
            result = result.substring(0, result.length() - 1);
        }

        return result;
    }

    @Override
    public Set<Integer> convertToEntityAttribute(String s) {
        String[] strings = s.split(".");
        Set<Integer> result = new HashSet<>();

        for (String str : strings) {
            result.add(Integer.valueOf(str));
        }

        return result;
    }
}